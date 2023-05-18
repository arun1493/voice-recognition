import type * as grpc from "@grpc/grpc-js";
import type { EnumTypeDefinition, MessageTypeDefinition } from "@grpc/proto-loader";

import type {
  IngesterServiceClient as _suki_pb_ingester_IngesterServiceClient,
  IngesterServiceDefinition as _suki_pb_ingester_IngesterServiceDefinition
} from "./suki/pb/ingester/IngesterService";

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new (...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Empty: MessageTypeDefinition;
      Timestamp: MessageTypeDefinition;
    };
  };
  suki: {
    pb: {
      ingester: {
        APLocation: MessageTypeDefinition;
        AddAnalyticsTransactionRequest: MessageTypeDefinition;
        AddStatus: EnumTypeDefinition;
        AddedAPLocation: MessageTypeDefinition;
        AddedContact: MessageTypeDefinition;
        AddedFacility: MessageTypeDefinition;
        AddedGroup: MessageTypeDefinition;
        AddedIntent: MessageTypeDefinition;
        AddedOutsideBuddy: MessageTypeDefinition;
        AddedSlotType: MessageTypeDefinition;
        AddedSlotValueType: MessageTypeDefinition;
        AddedUser: MessageTypeDefinition;
        AddedVoceraBuddy: MessageTypeDefinition;
        AnalyticsTransaction: MessageTypeDefinition;
        Contact: MessageTypeDefinition;
        DeleteAPLocationRequest: MessageTypeDefinition;
        DeleteContactRequest: MessageTypeDefinition;
        DeleteFacilityRequest: MessageTypeDefinition;
        DeleteGroupRequest: MessageTypeDefinition;
        DeleteOutsideBuddyRequest: MessageTypeDefinition;
        DeleteUserRequest: MessageTypeDefinition;
        DeleteVoceraBuddyRequest: MessageTypeDefinition;
        Facility: MessageTypeDefinition;
        GetAPLocationsRequest: MessageTypeDefinition;
        GetAPLocationsResponse: MessageTypeDefinition;
        GetAnalyticsTransactionsRequest: MessageTypeDefinition;
        GetAnalyticsTransactionsResponse: MessageTypeDefinition;
        GetContactsRequest: MessageTypeDefinition;
        GetContactsResponse: MessageTypeDefinition;
        GetFacilitiesRequest: MessageTypeDefinition;
        GetFacilitiesResponse: MessageTypeDefinition;
        GetGroupsRequest: MessageTypeDefinition;
        GetGroupsResponse: MessageTypeDefinition;
        GetOutsideBuddiesRequest: MessageTypeDefinition;
        GetOutsideBuddiesResponse: MessageTypeDefinition;
        GetProjectIdsResponse: MessageTypeDefinition;
        GetUsersRequest: MessageTypeDefinition;
        GetUsersResponse: MessageTypeDefinition;
        GetVoceraBuddiesRequest: MessageTypeDefinition;
        GetVoceraBuddiesResponse: MessageTypeDefinition;
        Group: MessageTypeDefinition;
        IngesterService: SubtypeConstructor<typeof grpc.Client, _suki_pb_ingester_IngesterServiceClient> & {
          service: _suki_pb_ingester_IngesterServiceDefinition;
        };
        Intent: MessageTypeDefinition;
        OutsideBuddy: MessageTypeDefinition;
        SlotType: MessageTypeDefinition;
        UpsertAPLocationsRequest: MessageTypeDefinition;
        UpsertAPLocationsResponse: MessageTypeDefinition;
        UpsertContactsRequest: MessageTypeDefinition;
        UpsertContactsResponse: MessageTypeDefinition;
        UpsertFacilitiesRequest: MessageTypeDefinition;
        UpsertFacilitiesResponse: MessageTypeDefinition;
        UpsertGroupsRequest: MessageTypeDefinition;
        UpsertGroupsResponse: MessageTypeDefinition;
        UpsertIntentsRequest: MessageTypeDefinition;
        UpsertIntentsResponse: MessageTypeDefinition;
        UpsertOutsideBuddiesRequest: MessageTypeDefinition;
        UpsertOutsideBuddiesResponse: MessageTypeDefinition;
        UpsertSlotTypesRequest: MessageTypeDefinition;
        UpsertSlotTypesResponse: MessageTypeDefinition;
        UpsertSlotValueTypesRequest: MessageTypeDefinition;
        UpsertSlotValueTypesResponse: MessageTypeDefinition;
        UpsertUsersRequest: MessageTypeDefinition;
        UpsertUsersResponse: MessageTypeDefinition;
        UpsertVoceraBuddiesRequest: MessageTypeDefinition;
        UpsertVoceraBuddiesResponse: MessageTypeDefinition;
        User: MessageTypeDefinition;
        VoceraBuddy: MessageTypeDefinition;
      };
    };
  };
}
