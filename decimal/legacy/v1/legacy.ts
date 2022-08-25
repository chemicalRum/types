/* eslint-disable */
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.legacy.v1";

export interface LegacyRecord {
  /** old address */
  address: string;
  /** account balance */
  coins: Coin[];
  /** nft token ids */
  nfts: NFTRecord[];
  /** multisig wallets addresses */
  wallets: string[];
}

export interface NFTRecord {
  denom: string;
  id: string;
}

function createBaseLegacyRecord(): LegacyRecord {
  return { address: "", coins: [], nfts: [], wallets: [] };
}

export const LegacyRecord = {
  encode(
    message: LegacyRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.nfts) {
      NFTRecord.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.wallets) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LegacyRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLegacyRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        case 3:
          message.nfts.push(NFTRecord.decode(reader, reader.uint32()));
          break;
        case 4:
          message.wallets.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LegacyRecord {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
      nfts: Array.isArray(object?.nfts)
        ? object.nfts.map((e: any) => NFTRecord.fromJSON(e))
        : [],
      wallets: Array.isArray(object?.wallets)
        ? object.wallets.map((e: any) => String(e))
        : [],
    };
  },

  toJSON(message: LegacyRecord): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => (e ? NFTRecord.toJSON(e) : undefined));
    } else {
      obj.nfts = [];
    }
    if (message.wallets) {
      obj.wallets = message.wallets.map((e) => e);
    } else {
      obj.wallets = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<LegacyRecord>, I>>(
    object: I
  ): LegacyRecord {
    const message = createBaseLegacyRecord();
    message.address = object.address ?? "";
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    message.nfts = object.nfts?.map((e) => NFTRecord.fromPartial(e)) || [];
    message.wallets = object.wallets?.map((e) => e) || [];
    return message;
  },
};

function createBaseNFTRecord(): NFTRecord {
  return { denom: "", id: "" };
}

export const NFTRecord = {
  encode(
    message: NFTRecord,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NFTRecord {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFTRecord();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NFTRecord {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: NFTRecord): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NFTRecord>, I>>(
    object: I
  ): NFTRecord {
    const message = createBaseNFTRecord();
    message.denom = object.denom ?? "";
    message.id = object.id ?? "";
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
