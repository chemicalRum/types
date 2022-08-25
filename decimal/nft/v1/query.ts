/* eslint-disable */
import * as Long from "long";
import { Owner } from "./owner";
import { Collection } from "./collection";
import { BaseNFT } from "./nft";
import { SubToken } from "./sub_token";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.nft.v1";

export interface QueryCollectionSupplyRequest {
  denom: string;
}

export interface QueryCollectionSupplyResponse {
  supply: number;
}

export interface QueryOwnerCollectionsRequest {
  owner: string;
}

export interface QueryOwnerCollectionsResponse {
  owner: Owner | undefined;
}

export interface QueryCollectionRequest {
  denom: string;
}

export interface QueryCollectionResponse {
  collection: Collection | undefined;
}

export interface QueryDenomsRequest {}

export interface QueryDenomsResponse {
  denoms: string[];
}

export interface QueryNFTRequest {
  denom: string;
  tokenId: string;
}

export interface QueryNFTResponse {
  nft: BaseNFT | undefined;
}

export interface QuerySubTokensRequest {
  denom: string;
  tokenId: string;
}

export interface QuerySubTokensResponse {
  subTokens: SubToken[];
}

function createBaseQueryCollectionSupplyRequest(): QueryCollectionSupplyRequest {
  return { denom: "" };
}

export const QueryCollectionSupplyRequest = {
  encode(
    message: QueryCollectionSupplyRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCollectionSupplyRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionSupplyRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectionSupplyRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryCollectionSupplyRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionSupplyRequest>, I>>(
    object: I
  ): QueryCollectionSupplyRequest {
    const message = createBaseQueryCollectionSupplyRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryCollectionSupplyResponse(): QueryCollectionSupplyResponse {
  return { supply: 0 };
}

export const QueryCollectionSupplyResponse = {
  encode(
    message: QueryCollectionSupplyResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.supply !== 0) {
      writer.uint32(8).int64(message.supply);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCollectionSupplyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionSupplyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.supply = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectionSupplyResponse {
    return {
      supply: isSet(object.supply) ? Number(object.supply) : 0,
    };
  },

  toJSON(message: QueryCollectionSupplyResponse): unknown {
    const obj: any = {};
    message.supply !== undefined && (obj.supply = Math.round(message.supply));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionSupplyResponse>, I>>(
    object: I
  ): QueryCollectionSupplyResponse {
    const message = createBaseQueryCollectionSupplyResponse();
    message.supply = object.supply ?? 0;
    return message;
  },
};

function createBaseQueryOwnerCollectionsRequest(): QueryOwnerCollectionsRequest {
  return { owner: "" };
}

export const QueryOwnerCollectionsRequest = {
  encode(
    message: QueryOwnerCollectionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOwnerCollectionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerCollectionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerCollectionsRequest {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
    };
  },

  toJSON(message: QueryOwnerCollectionsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOwnerCollectionsRequest>, I>>(
    object: I
  ): QueryOwnerCollectionsRequest {
    const message = createBaseQueryOwnerCollectionsRequest();
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryOwnerCollectionsResponse(): QueryOwnerCollectionsResponse {
  return { owner: undefined };
}

export const QueryOwnerCollectionsResponse = {
  encode(
    message: QueryOwnerCollectionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== undefined) {
      Owner.encode(message.owner, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOwnerCollectionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerCollectionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = Owner.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerCollectionsResponse {
    return {
      owner: isSet(object.owner) ? Owner.fromJSON(object.owner) : undefined,
    };
  },

  toJSON(message: QueryOwnerCollectionsResponse): unknown {
    const obj: any = {};
    message.owner !== undefined &&
      (obj.owner = message.owner ? Owner.toJSON(message.owner) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOwnerCollectionsResponse>, I>>(
    object: I
  ): QueryOwnerCollectionsResponse {
    const message = createBaseQueryOwnerCollectionsResponse();
    message.owner =
      object.owner !== undefined && object.owner !== null
        ? Owner.fromPartial(object.owner)
        : undefined;
    return message;
  },
};

function createBaseQueryCollectionRequest(): QueryCollectionRequest {
  return { denom: "" };
}

export const QueryCollectionRequest = {
  encode(
    message: QueryCollectionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectionRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
    };
  },

  toJSON(message: QueryCollectionRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionRequest>, I>>(
    object: I
  ): QueryCollectionRequest {
    const message = createBaseQueryCollectionRequest();
    message.denom = object.denom ?? "";
    return message;
  },
};

function createBaseQueryCollectionResponse(): QueryCollectionResponse {
  return { collection: undefined };
}

export const QueryCollectionResponse = {
  encode(
    message: QueryCollectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectionResponse {
    return {
      collection: isSet(object.collection)
        ? Collection.fromJSON(object.collection)
        : undefined,
    };
  },

  toJSON(message: QueryCollectionResponse): unknown {
    const obj: any = {};
    message.collection !== undefined &&
      (obj.collection = message.collection
        ? Collection.toJSON(message.collection)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionResponse>, I>>(
    object: I
  ): QueryCollectionResponse {
    const message = createBaseQueryCollectionResponse();
    message.collection =
      object.collection !== undefined && object.collection !== null
        ? Collection.fromPartial(object.collection)
        : undefined;
    return message;
  },
};

function createBaseQueryDenomsRequest(): QueryDenomsRequest {
  return {};
}

export const QueryDenomsRequest = {
  encode(
    _: QueryDenomsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryDenomsRequest {
    return {};
  },

  toJSON(_: QueryDenomsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsRequest>, I>>(
    _: I
  ): QueryDenomsRequest {
    const message = createBaseQueryDenomsRequest();
    return message;
  },
};

function createBaseQueryDenomsResponse(): QueryDenomsResponse {
  return { denoms: [] };
}

export const QueryDenomsResponse = {
  encode(
    message: QueryDenomsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsResponse {
    return {
      denoms: Array.isArray(object?.denoms)
        ? object.denoms.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: QueryDenomsResponse): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsResponse>, I>>(
    object: I
  ): QueryDenomsResponse {
    const message = createBaseQueryDenomsResponse();
    message.denoms = object.denoms?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryNFTRequest(): QueryNFTRequest {
  return { denom: "", tokenId: "" };
}

export const QueryNFTRequest = {
  encode(
    message: QueryNFTRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: QueryNFTRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTRequest>, I>>(
    object: I
  ): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.denom = object.denom ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseQueryNFTResponse(): QueryNFTResponse {
  return { nft: undefined };
}

export const QueryNFTResponse = {
  encode(
    message: QueryNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nft !== undefined) {
      BaseNFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryNFTResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = BaseNFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTResponse {
    return {
      nft: isSet(object.nft) ? BaseNFT.fromJSON(object.nft) : undefined,
    };
  },

  toJSON(message: QueryNFTResponse): unknown {
    const obj: any = {};
    message.nft !== undefined &&
      (obj.nft = message.nft ? BaseNFT.toJSON(message.nft) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTResponse>, I>>(
    object: I
  ): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    message.nft =
      object.nft !== undefined && object.nft !== null
        ? BaseNFT.fromPartial(object.nft)
        : undefined;
    return message;
  },
};

function createBaseQuerySubTokensRequest(): QuerySubTokensRequest {
  return { denom: "", tokenId: "" };
}

export const QuerySubTokensRequest = {
  encode(
    message: QuerySubTokensRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.tokenId !== "") {
      writer.uint32(18).string(message.tokenId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySubTokensRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubTokensRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubTokensRequest {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: QuerySubTokensRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubTokensRequest>, I>>(
    object: I
  ): QuerySubTokensRequest {
    const message = createBaseQuerySubTokensRequest();
    message.denom = object.denom ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseQuerySubTokensResponse(): QuerySubTokensResponse {
  return { subTokens: [] };
}

export const QuerySubTokensResponse = {
  encode(
    message: QuerySubTokensResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.subTokens) {
      SubToken.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QuerySubTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySubTokensResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.subTokens.push(SubToken.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySubTokensResponse {
    return {
      subTokens: Array.isArray(object?.subTokens)
        ? object.subTokens.map((e: any) => SubToken.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QuerySubTokensResponse): unknown {
    const obj: any = {};
    if (message.subTokens) {
      obj.subTokens = message.subTokens.map((e) =>
        e ? SubToken.toJSON(e) : undefined
      );
    } else {
      obj.subTokens = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySubTokensResponse>, I>>(
    object: I
  ): QuerySubTokensResponse {
    const message = createBaseQuerySubTokensResponse();
    message.subTokens =
      object.subTokens?.map((e) => SubToken.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves collection supply by denom */
  QueryCollectionSupply(
    request: QueryCollectionSupplyRequest
  ): Promise<QueryCollectionSupplyResponse>;
  QueryOwnerCollections(
    request: QueryOwnerCollectionsRequest
  ): Promise<QueryOwnerCollectionsResponse>;
  QueryCollection(
    request: QueryCollectionRequest
  ): Promise<QueryCollectionResponse>;
  QueryDenoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse>;
  QueryNFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
  QuerySubTokens(
    request: QuerySubTokensRequest
  ): Promise<QuerySubTokensResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.QueryCollectionSupply = this.QueryCollectionSupply.bind(this);
    this.QueryOwnerCollections = this.QueryOwnerCollections.bind(this);
    this.QueryCollection = this.QueryCollection.bind(this);
    this.QueryDenoms = this.QueryDenoms.bind(this);
    this.QueryNFT = this.QueryNFT.bind(this);
    this.QuerySubTokens = this.QuerySubTokens.bind(this);
  }
  QueryCollectionSupply(
    request: QueryCollectionSupplyRequest
  ): Promise<QueryCollectionSupplyResponse> {
    const data = QueryCollectionSupplyRequest.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.nft.v1.Query",
      "QueryCollectionSupply",
      data
    );
    return promise.then((data) =>
      QueryCollectionSupplyResponse.decode(new _m0.Reader(data))
    );
  }

  QueryOwnerCollections(
    request: QueryOwnerCollectionsRequest
  ): Promise<QueryOwnerCollectionsResponse> {
    const data = QueryOwnerCollectionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.nft.v1.Query",
      "QueryOwnerCollections",
      data
    );
    return promise.then((data) =>
      QueryOwnerCollectionsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryCollection(
    request: QueryCollectionRequest
  ): Promise<QueryCollectionResponse> {
    const data = QueryCollectionRequest.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.nft.v1.Query",
      "QueryCollection",
      data
    );
    return promise.then((data) =>
      QueryCollectionResponse.decode(new _m0.Reader(data))
    );
  }

  QueryDenoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse> {
    const data = QueryDenomsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.nft.v1.Query",
      "QueryDenoms",
      data
    );
    return promise.then((data) =>
      QueryDenomsResponse.decode(new _m0.Reader(data))
    );
  }

  QueryNFT(request: QueryNFTRequest): Promise<QueryNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("decimal.nft.v1.Query", "QueryNFT", data);
    return promise.then((data) =>
      QueryNFTResponse.decode(new _m0.Reader(data))
    );
  }

  QuerySubTokens(
    request: QuerySubTokensRequest
  ): Promise<QuerySubTokensResponse> {
    const data = QuerySubTokensRequest.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.nft.v1.Query",
      "QuerySubTokens",
      data
    );
    return promise.then((data) =>
      QuerySubTokensResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
