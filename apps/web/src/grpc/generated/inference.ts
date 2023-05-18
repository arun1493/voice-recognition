import type * as grpc from "@grpc/grpc-js";
import type { MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  InferenceAPIsServiceClient as _org_pytorch_serve_grpc_inference_InferenceAPIsServiceClient,
  InferenceAPIsServiceDefinition as _org_pytorch_serve_grpc_inference_InferenceAPIsServiceDefinition
} from "./org/pytorch/serve/grpc/inference/InferenceAPIsService";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition;
    };
  };
  org: {
    pytorch: {
      serve: {
        grpc: {
          inference: {
            InferenceAPIsService: SubtypeConstructor<
              typeof grpc.Client,
              _org_pytorch_serve_grpc_inference_InferenceAPIsServiceClient
            > & { service: _org_pytorch_serve_grpc_inference_InferenceAPIsServiceDefinition };
            PredictionResponse: MessageTypeDefinition;
            PredictionsRequest: MessageTypeDefinition;
            TorchServeHealthResponse: MessageTypeDefinition;
          };
        };
      };
    };
  };
}
