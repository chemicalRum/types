/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.legacy.v1";

export interface QueryStubRequest {}

export interface QueryStubResponse {}

function createBaseQueryStubRequest(): QueryStubRequest {
  return {};
}

export const QueryStubRequest = {
  encode(
    _: QueryStubRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStubRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStubRequest();
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

  fromJSON(_: any): QueryStubRequest {
    return {};
  },

  toJSON(_: QueryStubRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStubRequest>, I>>(
    _: I
  ): QueryStubRequest {
    const message = createBaseQueryStubRequest();
    return message;
  },
};

function createBaseQueryStubResponse(): QueryStubResponse {
  return {};
}

export const QueryStubResponse = {
  encode(
    _: QueryStubResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryStubResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryStubResponse();
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

  fromJSON(_: any): QueryStubResponse {
    return {};
  },

  toJSON(_: QueryStubResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryStubResponse>, I>>(
    _: I
  ): QueryStubResponse {
    const message = createBaseQueryStubResponse();
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** stub need to generate client */
  Stub(request: QueryStubRequest): Promise<QueryStubResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Stub = this.Stub.bind(this);
  }
  Stub(request: QueryStubRequest): Promise<QueryStubResponse> {
    const data = QueryStubRequest.encode(request).finish();
    const promise = this.rpc.request("decimal.legacy.v1.Query", "Stub", data);
    return promise.then((data) =>
      QueryStubResponse.decode(new _m0.Reader(data))
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
