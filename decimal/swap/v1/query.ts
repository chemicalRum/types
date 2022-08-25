/* eslint-disable */
import { Swap } from "./swap";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.swap.v1";

export interface QuerySwapRequest {
  hashedSecret: string;
}

export interface QuerySwapResponse {
  swap: Swap | undefined;
}

export interface QueryActiveSwapsRequest {}

export interface QueryActiveSwapsResponse {
  swaps: Swap[];
}

export interface QueryPoolRequest {}

export interface QueryPoolResponse {
  amount: Coin[];
}

function createBaseQuerySwapRequest(): QuerySwapRequest {
  return { hashedSecret: "" };
}

export const QuerySwapRequest = {
  encode(
    message: QuerySwapRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.hashedSecret !== "") {
      writer.uint32(10).string(message.hashedSecret);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hashedSecret = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapRequest {
    return {
      hashedSecret: isSet(object.hashedSecret)
        ? String(object.hashedSecret)
        : "",
    };
  },

  toJSON(message: QuerySwapRequest): unknown {
    const obj: any = {};
    message.hashedSecret !== undefined &&
      (obj.hashedSecret = message.hashedSecret);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapRequest>, I>>(
    object: I
  ): QuerySwapRequest {
    const message = createBaseQuerySwapRequest();
    message.hashedSecret = object.hashedSecret ?? "";
    return message;
  },
};

function createBaseQuerySwapResponse(): QuerySwapResponse {
  return { swap: undefined };
}

export const QuerySwapResponse = {
  encode(
    message: QuerySwapResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.swap !== undefined) {
      Swap.encode(message.swap, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QuerySwapResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQuerySwapResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swap = Swap.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QuerySwapResponse {
    return {
      swap: isSet(object.swap) ? Swap.fromJSON(object.swap) : undefined,
    };
  },

  toJSON(message: QuerySwapResponse): unknown {
    const obj: any = {};
    message.swap !== undefined &&
      (obj.swap = message.swap ? Swap.toJSON(message.swap) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QuerySwapResponse>, I>>(
    object: I
  ): QuerySwapResponse {
    const message = createBaseQuerySwapResponse();
    message.swap =
      object.swap !== undefined && object.swap !== null
        ? Swap.fromPartial(object.swap)
        : undefined;
    return message;
  },
};

function createBaseQueryActiveSwapsRequest(): QueryActiveSwapsRequest {
  return {};
}

export const QueryActiveSwapsRequest = {
  encode(
    _: QueryActiveSwapsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryActiveSwapsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveSwapsRequest();
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

  fromJSON(_: any): QueryActiveSwapsRequest {
    return {};
  },

  toJSON(_: QueryActiveSwapsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryActiveSwapsRequest>, I>>(
    _: I
  ): QueryActiveSwapsRequest {
    const message = createBaseQueryActiveSwapsRequest();
    return message;
  },
};

function createBaseQueryActiveSwapsResponse(): QueryActiveSwapsResponse {
  return { swaps: [] };
}

export const QueryActiveSwapsResponse = {
  encode(
    message: QueryActiveSwapsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.swaps) {
      Swap.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryActiveSwapsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryActiveSwapsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.swaps.push(Swap.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryActiveSwapsResponse {
    return {
      swaps: Array.isArray(object?.swaps)
        ? object.swaps.map((e: any) => Swap.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryActiveSwapsResponse): unknown {
    const obj: any = {};
    if (message.swaps) {
      obj.swaps = message.swaps.map((e) => (e ? Swap.toJSON(e) : undefined));
    } else {
      obj.swaps = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryActiveSwapsResponse>, I>>(
    object: I
  ): QueryActiveSwapsResponse {
    const message = createBaseQueryActiveSwapsResponse();
    message.swaps = object.swaps?.map((e) => Swap.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryPoolRequest(): QueryPoolRequest {
  return {};
}

export const QueryPoolRequest = {
  encode(
    _: QueryPoolRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolRequest();
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

  fromJSON(_: any): QueryPoolRequest {
    return {};
  },

  toJSON(_: QueryPoolRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolRequest>, I>>(
    _: I
  ): QueryPoolRequest {
    const message = createBaseQueryPoolRequest();
    return message;
  },
};

function createBaseQueryPoolResponse(): QueryPoolResponse {
  return { amount: [] };
}

export const QueryPoolResponse = {
  encode(
    message: QueryPoolResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPoolResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPoolResponse {
    return {
      amount: Array.isArray(object?.amount)
        ? object.amount.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryPoolResponse): unknown {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.amount = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPoolResponse>, I>>(
    object: I
  ): QueryPoolResponse {
    const message = createBaseQueryPoolResponse();
    message.amount = object.amount?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Retrieves existing swap by hashed secret. */
  Swap(request: QuerySwapRequest): Promise<QuerySwapResponse>;
  /** Retrieves active swaps. */
  ActiveSwaps(
    request: QueryActiveSwapsRequest
  ): Promise<QueryActiveSwapsResponse>;
  /** Retrieves amount of coins stored in swap pool. */
  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Swap = this.Swap.bind(this);
    this.ActiveSwaps = this.ActiveSwaps.bind(this);
    this.Pool = this.Pool.bind(this);
  }
  Swap(request: QuerySwapRequest): Promise<QuerySwapResponse> {
    const data = QuerySwapRequest.encode(request).finish();
    const promise = this.rpc.request("decimal.swap.v1.Query", "Swap", data);
    return promise.then((data) =>
      QuerySwapResponse.decode(new _m0.Reader(data))
    );
  }

  ActiveSwaps(
    request: QueryActiveSwapsRequest
  ): Promise<QueryActiveSwapsResponse> {
    const data = QueryActiveSwapsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.swap.v1.Query",
      "ActiveSwaps",
      data
    );
    return promise.then((data) =>
      QueryActiveSwapsResponse.decode(new _m0.Reader(data))
    );
  }

  Pool(request: QueryPoolRequest): Promise<QueryPoolResponse> {
    const data = QueryPoolRequest.encode(request).finish();
    const promise = this.rpc.request("decimal.swap.v1.Query", "Pool", data);
    return promise.then((data) =>
      QueryPoolResponse.decode(new _m0.Reader(data))
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

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
