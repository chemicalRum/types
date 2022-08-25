/* eslint-disable */
import { Duration } from "../../../google/protobuf/duration";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "decimal.validator.v1";

/** Params defines the parameters for the staking module. */
export interface Params {
  /** unbonding_time is the time duration of unbonding. */
  unbondingTime: Duration | undefined;
  /** max_validators is the maximum number of validators. */
  maxValidators: number;
  /** max_entries is the max entries for either unbonding delegation or redelegation (per pair/trio). */
  maxEntries: number;
  /** historical_entries is the number of historical entries to persist. */
  historicalEntries: number;
  /** max_delegations is the maximum number of delegations per validator. */
  maxDelegations: number;
  /** min_commission_rate is the chain-wide minimum commission rate that a validator can charge their delegators */
  minCommissionRate: string;
  /** bond_denom defines the bondable coin denomination. */
  bondDenom: string;
}

function createBaseParams(): Params {
  return {
    unbondingTime: undefined,
    maxValidators: 0,
    maxEntries: 0,
    historicalEntries: 0,
    maxDelegations: 0,
    minCommissionRate: "",
    bondDenom: "",
  };
}

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.unbondingTime !== undefined) {
      Duration.encode(message.unbondingTime, writer.uint32(10).fork()).ldelim();
    }
    if (message.maxValidators !== 0) {
      writer.uint32(16).uint32(message.maxValidators);
    }
    if (message.maxEntries !== 0) {
      writer.uint32(24).uint32(message.maxEntries);
    }
    if (message.historicalEntries !== 0) {
      writer.uint32(32).uint32(message.historicalEntries);
    }
    if (message.maxDelegations !== 0) {
      writer.uint32(40).uint32(message.maxDelegations);
    }
    if (message.minCommissionRate !== "") {
      writer.uint32(50).string(message.minCommissionRate);
    }
    if (message.bondDenom !== "") {
      writer.uint32(58).string(message.bondDenom);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.unbondingTime = Duration.decode(reader, reader.uint32());
          break;
        case 2:
          message.maxValidators = reader.uint32();
          break;
        case 3:
          message.maxEntries = reader.uint32();
          break;
        case 4:
          message.historicalEntries = reader.uint32();
          break;
        case 5:
          message.maxDelegations = reader.uint32();
          break;
        case 6:
          message.minCommissionRate = reader.string();
          break;
        case 7:
          message.bondDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    return {
      unbondingTime: isSet(object.unbondingTime)
        ? Duration.fromJSON(object.unbondingTime)
        : undefined,
      maxValidators: isSet(object.maxValidators)
        ? Number(object.maxValidators)
        : 0,
      maxEntries: isSet(object.maxEntries) ? Number(object.maxEntries) : 0,
      historicalEntries: isSet(object.historicalEntries)
        ? Number(object.historicalEntries)
        : 0,
      maxDelegations: isSet(object.maxDelegations)
        ? Number(object.maxDelegations)
        : 0,
      minCommissionRate: isSet(object.minCommissionRate)
        ? String(object.minCommissionRate)
        : "",
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : "",
    };
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.unbondingTime !== undefined &&
      (obj.unbondingTime = message.unbondingTime
        ? Duration.toJSON(message.unbondingTime)
        : undefined);
    message.maxValidators !== undefined &&
      (obj.maxValidators = Math.round(message.maxValidators));
    message.maxEntries !== undefined &&
      (obj.maxEntries = Math.round(message.maxEntries));
    message.historicalEntries !== undefined &&
      (obj.historicalEntries = Math.round(message.historicalEntries));
    message.maxDelegations !== undefined &&
      (obj.maxDelegations = Math.round(message.maxDelegations));
    message.minCommissionRate !== undefined &&
      (obj.minCommissionRate = message.minCommissionRate);
    message.bondDenom !== undefined && (obj.bondDenom = message.bondDenom);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Params>, I>>(object: I): Params {
    const message = createBaseParams();
    message.unbondingTime =
      object.unbondingTime !== undefined && object.unbondingTime !== null
        ? Duration.fromPartial(object.unbondingTime)
        : undefined;
    message.maxValidators = object.maxValidators ?? 0;
    message.maxEntries = object.maxEntries ?? 0;
    message.historicalEntries = object.historicalEntries ?? 0;
    message.maxDelegations = object.maxDelegations ?? 0;
    message.minCommissionRate = object.minCommissionRate ?? "";
    message.bondDenom = object.bondDenom ?? "";
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
