/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.legacy.v1";

export interface EventLegacyReturnCoin {
  oldAddress: string;
  newAddress: string;
  coins: string;
}

export interface EventLegacyReturnNFT {
  oldAddress: string;
  newAddress: string;
  denom: string;
  tokenId: string;
}

/** multisig wallet return */
export interface EventLegacyReturnWallet {
  oldAddress: string;
  newAddress: string;
  wallet: string;
}

function createBaseEventLegacyReturnCoin(): EventLegacyReturnCoin {
  return { oldAddress: "", newAddress: "", coins: "" };
}

export const EventLegacyReturnCoin = {
  encode(
    message: EventLegacyReturnCoin,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oldAddress !== "") {
      writer.uint32(18).string(message.oldAddress);
    }
    if (message.newAddress !== "") {
      writer.uint32(26).string(message.newAddress);
    }
    if (message.coins !== "") {
      writer.uint32(34).string(message.coins);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventLegacyReturnCoin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLegacyReturnCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.oldAddress = reader.string();
          break;
        case 3:
          message.newAddress = reader.string();
          break;
        case 4:
          message.coins = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventLegacyReturnCoin {
    return {
      oldAddress: isSet(object.oldAddress) ? String(object.oldAddress) : "",
      newAddress: isSet(object.newAddress) ? String(object.newAddress) : "",
      coins: isSet(object.coins) ? String(object.coins) : "",
    };
  },

  toJSON(message: EventLegacyReturnCoin): unknown {
    const obj: any = {};
    message.oldAddress !== undefined && (obj.oldAddress = message.oldAddress);
    message.newAddress !== undefined && (obj.newAddress = message.newAddress);
    message.coins !== undefined && (obj.coins = message.coins);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventLegacyReturnCoin>, I>>(
    object: I
  ): EventLegacyReturnCoin {
    const message = createBaseEventLegacyReturnCoin();
    message.oldAddress = object.oldAddress ?? "";
    message.newAddress = object.newAddress ?? "";
    message.coins = object.coins ?? "";
    return message;
  },
};

function createBaseEventLegacyReturnNFT(): EventLegacyReturnNFT {
  return { oldAddress: "", newAddress: "", denom: "", tokenId: "" };
}

export const EventLegacyReturnNFT = {
  encode(
    message: EventLegacyReturnNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oldAddress !== "") {
      writer.uint32(18).string(message.oldAddress);
    }
    if (message.newAddress !== "") {
      writer.uint32(26).string(message.newAddress);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.tokenId !== "") {
      writer.uint32(42).string(message.tokenId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventLegacyReturnNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLegacyReturnNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.oldAddress = reader.string();
          break;
        case 3:
          message.newAddress = reader.string();
          break;
        case 4:
          message.denom = reader.string();
          break;
        case 5:
          message.tokenId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventLegacyReturnNFT {
    return {
      oldAddress: isSet(object.oldAddress) ? String(object.oldAddress) : "",
      newAddress: isSet(object.newAddress) ? String(object.newAddress) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      tokenId: isSet(object.tokenId) ? String(object.tokenId) : "",
    };
  },

  toJSON(message: EventLegacyReturnNFT): unknown {
    const obj: any = {};
    message.oldAddress !== undefined && (obj.oldAddress = message.oldAddress);
    message.newAddress !== undefined && (obj.newAddress = message.newAddress);
    message.denom !== undefined && (obj.denom = message.denom);
    message.tokenId !== undefined && (obj.tokenId = message.tokenId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventLegacyReturnNFT>, I>>(
    object: I
  ): EventLegacyReturnNFT {
    const message = createBaseEventLegacyReturnNFT();
    message.oldAddress = object.oldAddress ?? "";
    message.newAddress = object.newAddress ?? "";
    message.denom = object.denom ?? "";
    message.tokenId = object.tokenId ?? "";
    return message;
  },
};

function createBaseEventLegacyReturnWallet(): EventLegacyReturnWallet {
  return { oldAddress: "", newAddress: "", wallet: "" };
}

export const EventLegacyReturnWallet = {
  encode(
    message: EventLegacyReturnWallet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.oldAddress !== "") {
      writer.uint32(18).string(message.oldAddress);
    }
    if (message.newAddress !== "") {
      writer.uint32(26).string(message.newAddress);
    }
    if (message.wallet !== "") {
      writer.uint32(34).string(message.wallet);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): EventLegacyReturnWallet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseEventLegacyReturnWallet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.oldAddress = reader.string();
          break;
        case 3:
          message.newAddress = reader.string();
          break;
        case 4:
          message.wallet = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventLegacyReturnWallet {
    return {
      oldAddress: isSet(object.oldAddress) ? String(object.oldAddress) : "",
      newAddress: isSet(object.newAddress) ? String(object.newAddress) : "",
      wallet: isSet(object.wallet) ? String(object.wallet) : "",
    };
  },

  toJSON(message: EventLegacyReturnWallet): unknown {
    const obj: any = {};
    message.oldAddress !== undefined && (obj.oldAddress = message.oldAddress);
    message.newAddress !== undefined && (obj.newAddress = message.newAddress);
    message.wallet !== undefined && (obj.wallet = message.wallet);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<EventLegacyReturnWallet>, I>>(
    object: I
  ): EventLegacyReturnWallet {
    const message = createBaseEventLegacyReturnWallet();
    message.oldAddress = object.oldAddress ?? "";
    message.newAddress = object.newAddress ?? "";
    message.wallet = object.wallet ?? "";
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
