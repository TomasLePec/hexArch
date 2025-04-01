import type { Company } from "../../../../domain/entities/company.entity"
import type { CompanyRepository } from "../../../../domain/repositories/company.repository"
import { CompanyModel } from "../models/company.model"
import { TransferModel } from "../models/transfer.model"

export class MongoDBCompanyRepository implements CompanyRepository {
  async save(company: Company): Promise<Company> {
    const newCompany = new CompanyModel(company)
    await newCompany.save()
    return {
      _id: newCompany._id.toString(),
      cuit: newCompany.cuit,
      razonSocial: newCompany.razonSocial,
      fechaAdhesion: newCompany.fechaAdhesion,
    }
  }

  async findCompaniesJoinedLastMonth(): Promise<Company[]> {
    const today = new Date()
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate())

    const companies = await CompanyModel.find({
      fechaAdhesion: { $gte: lastMonth, $lte: today },
    })

    return companies.map((company) => ({
      _id: company._id.toString(),
      cuit: company.cuit,
      razonSocial: company.razonSocial,
      fechaAdhesion: company.fechaAdhesion,
    }))
  }

  async findCompaniesWithTransfersLastMonth(): Promise<Company[]> {
    const today = new Date()
    const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate())

    // Find company IDs with transfers in the last month
    const transfers = await TransferModel.find({
      fecha: { $gte: lastMonth, $lte: today },
    }).distinct("idEmpresa")

    // Find the companies with those IDs
    const companies = await CompanyModel.find({
      _id: { $in: transfers },
    })

    return companies.map((company) => ({
      _id: company._id.toString(),
      cuit: company.cuit,
      razonSocial: company.razonSocial,
      fechaAdhesion: company.fechaAdhesion,
    }))
  }
}
