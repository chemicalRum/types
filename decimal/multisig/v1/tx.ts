/* eslint-disable */
import * as Long from "long";
import { Coin } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.multisig.v1";

export interface MsgCreateTransaction {
  sender: string;
  wallet: string;
  receiver: string;
  coins: Coin[];
}

export interface MsgCreateTransactionResponse {
  txID: string;
}

export interface MsgCreateWallet {
  sender: string;
  owners: string[];
  weights: number[];
  threshold: number;
}

export interface MsgCreateWalletResponse {
  wallet: string;
}

export interface MsgSignTransaction {
  sender: string;
  txID: string;
}

export interface MsgSignTransactionResponse {}

function createBaseMsgCreateTransaction(): MsgCreateTransaction {
  return { sender: "", wallet: "", receiver: "", coins: [] };
}

export const MsgCreateTransaction = {
  encode(
    message: MsgCreateTransaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.wallet !== "") {
      writer.uint32(18).string(message.wallet);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.wallet = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.coins.push(Coin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransaction {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      wallet: isSet(object.wallet) ? String(object.wallet) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      coins: Array.isArray(object?.coins)
        ? object.coins.map((e: any) => Coin.fromJSON(e))
        : [],
    };
  },

  toJSON(message: MsgCreateTransaction): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.wallet !== undefined && (obj.wallet = message.wallet);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    if (message.coins) {
      obj.coins = message.coins.map((e) => (e ? Coin.toJSON(e) : undefined));
    } else {
      obj.coins = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateTransaction>, I>>(
    object: I
  ): MsgCreateTransaction {
    const message = createBaseMsgCreateTransaction();
    message.sender = object.sender ?? "";
    message.wallet = object.wallet ?? "";
    message.receiver = object.receiver ?? "";
    message.coins = object.coins?.map((e) => Coin.fromPartial(e)) || [];
    return message;
  },
};

function createBaseMsgCreateTransactionResponse(): MsgCreateTransactionResponse {
  return { txID: "" };
}

export const MsgCreateTransactionResponse = {
  encode(
    message: MsgCreateTransactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.txID !== "") {
      writer.uint32(10).string(message.txID);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateTransactionResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.txID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateTransactionResponse {
    return {
      txID: isSet(object.txID) ? String(object.txID) : "",
    };
  },

  toJSON(message: MsgCreateTransactionResponse): unknown {
    const obj: any = {};
    message.txID !== undefined && (obj.txID = message.txID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateTransactionResponse>, I>>(
    object: I
  ): MsgCreateTransactionResponse {
    const message = createBaseMsgCreateTransactionResponse();
    message.txID = object.txID ?? "";
    return message;
  },
};

function createBaseMsgCreateWallet(): MsgCreateWallet {
  return { sender: "", owners: [], weights: [], threshold: 0 };
}

export const MsgCreateWallet = {
  encode(
    message: MsgCreateWallet,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    for (const v of message.owners) {
      writer.uint32(18).string(v!);
    }
    writer.uint32(26).fork();
    for (const v of message.weights) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.threshold !== 0) {
      writer.uint32(32).uint64(message.threshold);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateWallet {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateWallet();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.owners.push(reader.string());
          break;
        case 3:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.weights.push(longToNumber(reader.uint64() as Long));
            }
          } else {
            message.weights.push(longToNumber(reader.uint64() as Long));
          }
          break;
        case 4:
          message.threshold = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateWallet {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      owners: Array.isArray(object?.owners)
        ? object.owners.map((e: any) => String(e))
        : [],
      weights: Array.isArray(object?.weights)
        ? object.weights.map((e: any) => Number(e))
        : [],
      threshold: isSet(object.threshold) ? Number(object.threshold) : 0,
    };
  },

  toJSON(message: MsgCreateWallet): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    if (message.owners) {
      obj.owners = message.owners.map((e) => e);
    } else {
      obj.owners = [];
    }
    if (message.weights) {
      obj.weights = message.weights.map((e) => Math.round(e));
    } else {
      obj.weights = [];
    }
    message.threshold !== undefined &&
      (obj.threshold = Math.round(message.threshold));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateWallet>, I>>(
    object: I
  ): MsgCreateWallet {
    const message = createBaseMsgCreateWallet();
    message.sender = object.sender ?? "";
    message.owners = object.owners?.map((e) => e) || [];
    message.weights = object.weights?.map((e) => e) || [];
    message.threshold = object.threshold ?? 0;
    return message;
  },
};

function createBaseMsgCreateWalletResponse(): MsgCreateWalletResponse {
  return { wallet: "" };
}

export const MsgCreateWalletResponse = {
  encode(
    message: MsgCreateWalletResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.wallet !== "") {
      writer.uint32(10).string(message.wallet);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateWalletResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateWalletResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.wallet = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateWalletResponse {
    return {
      wallet: isSet(object.wallet) ? String(object.wallet) : "",
    };
  },

  toJSON(message: MsgCreateWalletResponse): unknown {
    const obj: any = {};
    message.wallet !== undefined && (obj.wallet = message.wallet);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateWalletResponse>, I>>(
    object: I
  ): MsgCreateWalletResponse {
    const message = createBaseMsgCreateWalletResponse();
    message.wallet = object.wallet ?? "";
    return message;
  },
};

function createBaseMsgSignTransaction(): MsgSignTransaction {
  return { sender: "", txID: "" };
}

export const MsgSignTransaction = {
  encode(
    message: MsgSignTransaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.txID !== "") {
      writer.uint32(18).string(message.txID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSignTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.txID = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSignTransaction {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      txID: isSet(object.txID) ? String(object.txID) : "",
    };
  },

  toJSON(message: MsgSignTransaction): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.txID !== undefined && (obj.txID = message.txID);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignTransaction>, I>>(
    object: I
  ): MsgSignTransaction {
    const message = createBaseMsgSignTransaction();
    message.sender = object.sender ?? "";
    message.txID = object.txID ?? "";
    return message;
  },
};

function createBaseMsgSignTransactionResponse(): MsgSignTransactionResponse {
  return {};
}

export const MsgSignTransactionResponse = {
  encode(
    _: MsgSignTransactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSignTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSignTransactionResponse();
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

  fromJSON(_: any): MsgSignTransactionResponse {
    return {};
  },

  toJSON(_: MsgSignTransactionResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSignTransactionResponse>, I>>(
    _: I
  ): MsgSignTransactionResponse {
    const message = createBaseMsgSignTransactionResponse();
    return message;
  },
};

export interface Msg {
  CreateTransaction(
    request: MsgCreateTransaction
  ): Promise<MsgCreateTransactionResponse>;
  CreateWallet(request: MsgCreateWallet): Promise<MsgCreateWalletResponse>;
  SignTransaction(
    request: MsgSignTransaction
  ): Promise<MsgSignTransactionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateTransaction = this.CreateTransaction.bind(this);
    this.CreateWallet = this.CreateWallet.bind(this);
    this.SignTransaction = this.SignTransaction.bind(this);
  }
  CreateTransaction(
    request: MsgCreateTransaction
  ): Promise<MsgCreateTransactionResponse> {
    const data = MsgCreateTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.multisig.v1.Msg",
      "CreateTransaction",
      data
    );
    return promise.then((data) =>
      MsgCreateTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  CreateWallet(request: MsgCreateWallet): Promise<MsgCreateWalletResponse> {
    const data = MsgCreateWallet.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.multisig.v1.Msg",
      "CreateWallet",
      data
    );
    return promise.then((data) =>
      MsgCreateWalletResponse.decode(new _m0.Reader(data))
    );
  }

  SignTransaction(
    request: MsgSignTransaction
  ): Promise<MsgSignTransactionResponse> {
    const data = MsgSignTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.multisig.v1.Msg",
      "SignTransaction",
      data
    );
    return promise.then((data) =>
      MsgSignTransactionResponse.decode(new _m0.Reader(data))
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
