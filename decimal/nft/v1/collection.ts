/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.nft.v1";

export interface Collection {
  denom: string;
  nfts: string[];
}

export interface OwnerCollection {
  denom: string;
  nfts: string[];
}

function createBaseCollection(): Collection {
  return { denom: "", nfts: [] };
}

export const Collection = {
  encode(
    message: Collection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    for (const v of message.nfts) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Collection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.nfts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Collection {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      nfts: Array.isArray(object?.nfts)
        ? object.nfts.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: Collection): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => e);
    } else {
      obj.nfts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Collection>, I>>(
    object: I
  ): Collection {
    const message = createBaseCollection();
    message.denom = object.denom ?? "";
    message.nfts = object.nfts?.map((e) => e) || [];
    return message;
  },
};

function createBaseOwnerCollection(): OwnerCollection {
  return { denom: "", nfts: [] };
}

export const OwnerCollection = {
  encode(
    message: OwnerCollection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    for (const v of message.nfts) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OwnerCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwnerCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.nfts.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OwnerCollection {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      nfts: Array.isArray(object?.nfts)
        ? object.nfts.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: OwnerCollection): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => e);
    } else {
      obj.nfts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OwnerCollection>, I>>(
    object: I
  ): OwnerCollection {
    const message = createBaseOwnerCollection();
    message.denom = object.denom ?? "";
    message.nfts = object.nfts?.map((e) => e) || [];
    return message;
  },
};

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
