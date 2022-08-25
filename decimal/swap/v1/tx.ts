/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.swap.v1";

export interface MsgSwapInitialize {
  sender: string;
  recipient: string;
  amount: string;
  tokenSymbol: string;
  transactionNumber: string;
  fromChain: number;
  destChain: number;
}

export interface MsgSwapInitializeResponse {}

export interface MsgSwapRedeem {
  sender: string;
  from: string;
  recipient: string;
  amount: string;
  tokenSymbol: string;
  transactionNumber: string;
  fromChain: number;
  destChain: number;
  v: number;
  r: string;
  s: string;
}

export interface MsgSwapRedeemResponse {}

export interface MsgChainActivate {
  sender: string;
  chainNumber: number;
  chainName: string;
}

export interface MsgChainActivateResponse {}

export interface MsgChainDeactivate {
  sender: string;
  chainNumber: number;
}

export interface MsgChainDeactivateResponse {}

function createBaseMsgSwapInitialize(): MsgSwapInitialize {
  return {
    sender: "",
    recipient: "",
    amount: "",
    tokenSymbol: "",
    transactionNumber: "",
    fromChain: 0,
    destChain: 0,
  };
}

export const MsgSwapInitialize = {
  encode(
    message: MsgSwapInitialize,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(18).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.tokenSymbol !== "") {
      writer.uint32(34).string(message.tokenSymbol);
    }
    if (message.transactionNumber !== "") {
      writer.uint32(42).string(message.transactionNumber);
    }
    if (message.fromChain !== 0) {
      writer.uint32(48).uint32(message.fromChain);
    }
    if (message.destChain !== 0) {
      writer.uint32(56).uint32(message.destChain);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapInitialize {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapInitialize();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.recipient = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.tokenSymbol = reader.string();
          break;
        case 5:
          message.transactionNumber = reader.string();
          break;
        case 6:
          message.fromChain = reader.uint32();
          break;
        case 7:
          message.destChain = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwapInitialize {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : "",
      transactionNumber: isSet(object.transactionNumber)
        ? String(object.transactionNumber)
        : "",
      fromChain: isSet(object.fromChain) ? Number(object.fromChain) : 0,
      destChain: isSet(object.destChain) ? Number(object.destChain) : 0,
    };
  },

  toJSON(message: MsgSwapInitialize): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    message.tokenSymbol !== undefined &&
      (obj.tokenSymbol = message.tokenSymbol);
    message.transactionNumber !== undefined &&
      (obj.transactionNumber = message.transactionNumber);
    message.fromChain !== undefined &&
      (obj.fromChain = Math.round(message.fromChain));
    message.destChain !== undefined &&
      (obj.destChain = Math.round(message.destChain));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapInitialize>, I>>(
    object: I
  ): MsgSwapInitialize {
    const message = createBaseMsgSwapInitialize();
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.tokenSymbol = object.tokenSymbol ?? "";
    message.transactionNumber = object.transactionNumber ?? "";
    message.fromChain = object.fromChain ?? 0;
    message.destChain = object.destChain ?? 0;
    return message;
  },
};

function createBaseMsgSwapInitializeResponse(): MsgSwapInitializeResponse {
  return {};
}

export const MsgSwapInitializeResponse = {
  encode(
    _: MsgSwapInitializeResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSwapInitializeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapInitializeResponse();
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

  fromJSON(_: any): MsgSwapInitializeResponse {
    return {};
  },

  toJSON(_: MsgSwapInitializeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapInitializeResponse>, I>>(
    _: I
  ): MsgSwapInitializeResponse {
    const message = createBaseMsgSwapInitializeResponse();
    return message;
  },
};

function createBaseMsgSwapRedeem(): MsgSwapRedeem {
  return {
    sender: "",
    from: "",
    recipient: "",
    amount: "",
    tokenSymbol: "",
    transactionNumber: "",
    fromChain: 0,
    destChain: 0,
    v: 0,
    r: "",
    s: "",
  };
}

export const MsgSwapRedeem = {
  encode(
    message: MsgSwapRedeem,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.recipient !== "") {
      writer.uint32(26).string(message.recipient);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.tokenSymbol !== "") {
      writer.uint32(42).string(message.tokenSymbol);
    }
    if (message.transactionNumber !== "") {
      writer.uint32(50).string(message.transactionNumber);
    }
    if (message.fromChain !== 0) {
      writer.uint32(56).uint32(message.fromChain);
    }
    if (message.destChain !== 0) {
      writer.uint32(64).uint32(message.destChain);
    }
    if (message.v !== 0) {
      writer.uint32(72).uint32(message.v);
    }
    if (message.r !== "") {
      writer.uint32(82).string(message.r);
    }
    if (message.s !== "") {
      writer.uint32(90).string(message.s);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapRedeem {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapRedeem();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.recipient = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.tokenSymbol = reader.string();
          break;
        case 6:
          message.transactionNumber = reader.string();
          break;
        case 7:
          message.fromChain = reader.uint32();
          break;
        case 8:
          message.destChain = reader.uint32();
          break;
        case 9:
          message.v = reader.uint32();
          break;
        case 10:
          message.r = reader.string();
          break;
        case 11:
          message.s = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwapRedeem {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      from: isSet(object.from) ? String(object.from) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : "",
      transactionNumber: isSet(object.transactionNumber)
        ? String(object.transactionNumber)
        : "",
      fromChain: isSet(object.fromChain) ? Number(object.fromChain) : 0,
      destChain: isSet(object.destChain) ? Number(object.destChain) : 0,
      v: isSet(object.v) ? Number(object.v) : 0,
      r: isSet(object.r) ? String(object.r) : "",
      s: isSet(object.s) ? String(object.s) : "",
    };
  },

  toJSON(message: MsgSwapRedeem): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.from !== undefined && (obj.from = message.from);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    message.amount !== undefined && (obj.amount = message.amount);
    message.tokenSymbol !== undefined &&
      (obj.tokenSymbol = message.tokenSymbol);
    message.transactionNumber !== undefined &&
      (obj.transactionNumber = message.transactionNumber);
    message.fromChain !== undefined &&
      (obj.fromChain = Math.round(message.fromChain));
    message.destChain !== undefined &&
      (obj.destChain = Math.round(message.destChain));
    message.v !== undefined && (obj.v = Math.round(message.v));
    message.r !== undefined && (obj.r = message.r);
    message.s !== undefined && (obj.s = message.s);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapRedeem>, I>>(
    object: I
  ): MsgSwapRedeem {
    const message = createBaseMsgSwapRedeem();
    message.sender = object.sender ?? "";
    message.from = object.from ?? "";
    message.recipient = object.recipient ?? "";
    message.amount = object.amount ?? "";
    message.tokenSymbol = object.tokenSymbol ?? "";
    message.transactionNumber = object.transactionNumber ?? "";
    message.fromChain = object.fromChain ?? 0;
    message.destChain = object.destChain ?? 0;
    message.v = object.v ?? 0;
    message.r = object.r ?? "";
    message.s = object.s ?? "";
    return message;
  },
};

function createBaseMsgSwapRedeemResponse(): MsgSwapRedeemResponse {
  return {};
}

export const MsgSwapRedeemResponse = {
  encode(
    _: MsgSwapRedeemResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSwapRedeemResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapRedeemResponse();
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

  fromJSON(_: any): MsgSwapRedeemResponse {
    return {};
  },

  toJSON(_: MsgSwapRedeemResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapRedeemResponse>, I>>(
    _: I
  ): MsgSwapRedeemResponse {
    const message = createBaseMsgSwapRedeemResponse();
    return message;
  },
};

function createBaseMsgChainActivate(): MsgChainActivate {
  return { sender: "", chainNumber: 0, chainName: "" };
}

export const MsgChainActivate = {
  encode(
    message: MsgChainActivate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.chainNumber !== 0) {
      writer.uint32(16).uint32(message.chainNumber);
    }
    if (message.chainName !== "") {
      writer.uint32(26).string(message.chainName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChainActivate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChainActivate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.chainNumber = reader.uint32();
          break;
        case 3:
          message.chainName = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChainActivate {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      chainNumber: isSet(object.chainNumber) ? Number(object.chainNumber) : 0,
      chainName: isSet(object.chainName) ? String(object.chainName) : "",
    };
  },

  toJSON(message: MsgChainActivate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.chainNumber !== undefined &&
      (obj.chainNumber = Math.round(message.chainNumber));
    message.chainName !== undefined && (obj.chainName = message.chainName);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChainActivate>, I>>(
    object: I
  ): MsgChainActivate {
    const message = createBaseMsgChainActivate();
    message.sender = object.sender ?? "";
    message.chainNumber = object.chainNumber ?? 0;
    message.chainName = object.chainName ?? "";
    return message;
  },
};

function createBaseMsgChainActivateResponse(): MsgChainActivateResponse {
  return {};
}

export const MsgChainActivateResponse = {
  encode(
    _: MsgChainActivateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChainActivateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChainActivateResponse();
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

  fromJSON(_: any): MsgChainActivateResponse {
    return {};
  },

  toJSON(_: MsgChainActivateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChainActivateResponse>, I>>(
    _: I
  ): MsgChainActivateResponse {
    const message = createBaseMsgChainActivateResponse();
    return message;
  },
};

function createBaseMsgChainDeactivate(): MsgChainDeactivate {
  return { sender: "", chainNumber: 0 };
}

export const MsgChainDeactivate = {
  encode(
    message: MsgChainDeactivate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.chainNumber !== 0) {
      writer.uint32(16).uint32(message.chainNumber);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChainDeactivate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChainDeactivate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.chainNumber = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChainDeactivate {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      chainNumber: isSet(object.chainNumber) ? Number(object.chainNumber) : 0,
    };
  },

  toJSON(message: MsgChainDeactivate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.chainNumber !== undefined &&
      (obj.chainNumber = Math.round(message.chainNumber));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChainDeactivate>, I>>(
    object: I
  ): MsgChainDeactivate {
    const message = createBaseMsgChainDeactivate();
    message.sender = object.sender ?? "";
    message.chainNumber = object.chainNumber ?? 0;
    return message;
  },
};

function createBaseMsgChainDeactivateResponse(): MsgChainDeactivateResponse {
  return {};
}

export const MsgChainDeactivateResponse = {
  encode(
    _: MsgChainDeactivateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgChainDeactivateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChainDeactivateResponse();
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

  fromJSON(_: any): MsgChainDeactivateResponse {
    return {};
  },

  toJSON(_: MsgChainDeactivateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChainDeactivateResponse>, I>>(
    _: I
  ): MsgChainDeactivateResponse {
    const message = createBaseMsgChainDeactivateResponse();
    return message;
  },
};

export interface Msg {
  SwapInitialize(
    request: MsgSwapInitialize
  ): Promise<MsgSwapInitializeResponse>;
  SwapRedeem(request: MsgSwapRedeem): Promise<MsgSwapRedeemResponse>;
  ChainActivate(request: MsgChainActivate): Promise<MsgChainActivateResponse>;
  ChainDeactivate(
    request: MsgChainDeactivate
  ): Promise<MsgChainDeactivateResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.SwapInitialize = this.SwapInitialize.bind(this);
    this.SwapRedeem = this.SwapRedeem.bind(this);
    this.ChainActivate = this.ChainActivate.bind(this);
    this.ChainDeactivate = this.ChainDeactivate.bind(this);
  }
  SwapInitialize(
    request: MsgSwapInitialize
  ): Promise<MsgSwapInitializeResponse> {
    const data = MsgSwapInitialize.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.swap.v1.Msg",
      "SwapInitialize",
      data
    );
    return promise.then((data) =>
      MsgSwapInitializeResponse.decode(new _m0.Reader(data))
    );
  }

  SwapRedeem(request: MsgSwapRedeem): Promise<MsgSwapRedeemResponse> {
    const data = MsgSwapRedeem.encode(request).finish();
    const promise = this.rpc.request("decimal.swap.v1.Msg", "SwapRedeem", data);
    return promise.then((data) =>
      MsgSwapRedeemResponse.decode(new _m0.Reader(data))
    );
  }

  ChainActivate(request: MsgChainActivate): Promise<MsgChainActivateResponse> {
    const data = MsgChainActivate.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.swap.v1.Msg",
      "ChainActivate",
      data
    );
    return promise.then((data) =>
      MsgChainActivateResponse.decode(new _m0.Reader(data))
    );
  }

  ChainDeactivate(
    request: MsgChainDeactivate
  ): Promise<MsgChainDeactivateResponse> {
    const data = MsgChainDeactivate.encode(request).finish();
    const promise = this.rpc.request(
      "decimal.swap.v1.Msg",
      "ChainDeactivate",
      data
    );
    return promise.then((data) =>
      MsgChainDeactivateResponse.decode(new _m0.Reader(data))
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
