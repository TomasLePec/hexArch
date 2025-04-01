import mongoose, { Schema, type Document } from "mongoose"
import type { Transfer } from "../../../../domain/entities/transfer.entity"

export interface TransferDocument extends Omit<Transfer, "_id">, Document {}

const TransferSchema = new Schema({
  importe: { type: Number, required: true },
  idEmpresa: { type: Schema.Types.ObjectId, ref: "Company", required: true },
  cuentaDebito: { type: String, required: true },
  cuentaCredito: { type: String, required: true },
  fecha: { type: Date, required: true, default: Date.now },
})

export const TransferModel = mongoose.model<TransferDocument>("Transfer", TransferSchema)
