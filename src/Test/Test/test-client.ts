import "es6-shim";
import { JsonServiceClient } from "@servicestack/client";

import {
    Hello, HelloResponse,
    HelloTypes,
    EchoTypes
} from "./Scripts/Test.dtos";

var client = new JsonServiceClient("/");

