using System;
using System.Collections.Generic;
using System.Drawing;
using System.Drawing.Imaging;
using System.IO;
using ServiceStack;
using ServiceStack.Web;

namespace Test.ServiceInterface
{
    [Route("/image-stream")]
    public class ImageAsStream
    {
        public string Format { get; set; }
    }

    [Route("/image-bytes")]
    public class ImageAsBytes
    {
        public string Format { get; set; }
    }

    [Route("/image-result")]
    public class ImageAsImageResult
    {
        public string Format { get; set; }
    }

    [Route("/image-response")]
    public class ImageWriteToResponse
    {
        public string Format { get; set; }
    }

    [Route("/image-file")]
    public class ImageAsFile
    {
        public string Format { get; set; }
    }

    [Route("/image-redirect")]
    public class ImageAsRedirect
    {
        public string Format { get; set; }
    }

    public class ImageService : Service
    {
        public object Any(ImageAsStream request)
        {
            using (var image = new Bitmap(100, 100))
            {
                using (var g = Graphics.FromImage(image))
                {
                    g.Clear(request.Format.ToImageColor());
                }
                var ms = new MemoryStream();
                image.Save(ms, request.Format.ToImageFormat());
                return new HttpResult(ms, request.Format.ToImageMimeType()); 
            }
        }

        public object Any(ImageAsBytes request)
        {
            using (var image = new Bitmap(100, 100))
            {
                using (var g = Graphics.FromImage(image))
                {
                    g.Clear(request.Format.ToImageColor());
                }
                using (var m = new MemoryStream())
                {
                    image.Save(m, request.Format.ToImageFormat());
                    var imageData = m.ToArray(); //buffers
                    return new HttpResult(imageData, request.Format.ToImageMimeType());
                }
            }
        }

        public object Any(ImageAsImageResult request)
        {
            var image = new Bitmap(100, 100);
            using (var g = Graphics.FromImage(image))
            {
                g.Clear(request.Format.ToImageColor());

                return new ImageResult(image, request.Format.ToImageFormat()); //terse + explicit is good :)
            }
        }

        public void Any(ImageWriteToResponse request)
        {
            using (var image = new Bitmap(100, 100))
            {
                using (var g = Graphics.FromImage(image))
                {
                    g.Clear(request.Format.ToImageColor());
                }

                base.Response.ContentType = request.Format.ToImageMimeType();
                image.Save(base.Response.OutputStream, request.Format.ToImageFormat());
                base.Response.Close();
            }
        }

        public object Any(ImageAsFile request)
        {
            var fileName = "sample.{0}".Fmt(request.Format ?? "png");
            return new HttpResult(new FileInfo("~/img/{0}".Fmt(fileName).MapHostAbsolutePath()), request.Format.ToImageMimeType());
        }

        public object Any(ImageAsRedirect request)
        {
            var fileName = "sample.{0}".Fmt(request.Format ?? "png");
            return HttpResult.Redirect("/img/" + fileName);
        }
    }

    //Your own Custom Result, writes directly to response stream
    public class ImageResult : IDisposable, IStreamWriter, IHasOptions
    {
        private readonly Image image;
        private readonly ImageFormat imgFormat;

        public ImageResult(Image image, ImageFormat imgFormat = null)
        {
            this.image = image;
            this.imgFormat = imgFormat ?? ImageFormat.Png;
            this.Options = new Dictionary<string, string> {
                { HttpHeaders.ContentType, this.imgFormat.ToImageMimeType() }
            };
        }

        public void WriteTo(Stream responseStream)
        {
            using (var ms = new MemoryStream())
            {
                image.Save(ms, imgFormat);
                ms.WriteTo(responseStream);
            } 
        }

        public void Dispose()
        {
            this.image.Dispose();
        }

        public IDictionary<string, string> Options { get; set; }
    }

    public static class ImageExtensions
    {
        public static Color ToImageColor(this string imageFormat)
        {
            return imageFormat.ToImageFormat().ToImageColor();
        }

        public static Color ToImageColor(this ImageFormat imageFormat)
        {
            if (ImageFormat.Gif.Equals(imageFormat))
                return Color.Blue;
            if (ImageFormat.Jpeg.Equals(imageFormat))
                return Color.Red;
            if (ImageFormat.Bmp.Equals(imageFormat))
                return Color.Gray;

            return Color.Green;
        }

        public static ImageFormat ToImageFormat(this string imageFormat)
        {
            if (imageFormat != null)
            {
                var fmt = imageFormat.ToLower();
                if (fmt == "gif")
                    return ImageFormat.Gif;
                if (fmt == "jpg" || fmt == "jpeg")
                    return ImageFormat.Jpeg;
                if (fmt == "bmp")
                    return ImageFormat.Bmp;
            }

            return ImageFormat.Png;
        }

        public static string ToImageMimeType(this string imageFormat)
        {
            return imageFormat.ToImageFormat().ToImageMimeType();
        }

        public static string ToImageMimeType(this ImageFormat imageFormat)
        {
            var ext = "png";
            if (ImageFormat.Gif.Equals(imageFormat))
                ext = "gif";
            else if (ImageFormat.Jpeg.Equals(imageFormat))
                ext = "jpeg";
            else if (ImageFormat.Bmp.Equals(imageFormat))
                ext = "bmp";

            return "image/{0}".Fmt(ext);
        }
    }
}