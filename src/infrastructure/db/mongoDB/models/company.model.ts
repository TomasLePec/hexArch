import mongoose, { Schema, Types, type Document } from "mongoose"
import type { Company } from "../../../../domain/entities/company.entity"

export interface CompanyDocument extends Omit<Company, "_id">, Document { _id: Types.ObjectId }

const CompanySchema = new Schema({
  cuit: { type: String, required: true, unique: true },
  razonSocial: { type: String, required: true },
  fechaAdhesion: { type: Date, required: true, default: Date.now },
})

export const CompanyModel = mongoose.model<CompanyDocument>("Company", CompanySchema)
