import type { Request, Response } from "express"
import type { CreateCompanyUseCase } from "../../../application/use-cases/create-company.use-case"
import type { GetCompaniesJoinedLastMonthUseCase } from "../../../application/use-cases/get-companies-last-month.use-case"
import type { GetCompaniesWithTransfersLastMonthUseCase } from "../../../application/use-cases/get-companies-transfer-last-month.use-case"

export class CompanyController {
  constructor(
    private readonly createCompanyUseCase: CreateCompanyUseCase,
    private readonly getCompaniesJoinedLastMonthUseCase: GetCompaniesJoinedLastMonthUseCase,
    private readonly getCompaniesWithTransfersLastMonthUseCase: GetCompaniesWithTransfersLastMonthUseCase,
  ) {}

  async createCompany(req: Request, res: Response): Promise<void> {
    try {
      const { cuit, razonSocial } = req.body

      if (!cuit || !razonSocial) {
        res.status(400).json({ message: "CUIT y Razón Social son requeridos" })
        return
      }

      const company = await this.createCompanyUseCase.execute({
        cuit,
        razonSocial,
        fechaAdhesion: new Date(),
      })

      res.status(201).json(company)
    } catch (error) {
      res.status(500).json({ message: "Error al crear la empresa", error })
    }
  }

  async getCompaniesJoinedLastMonth(req: Request, res: Response): Promise<void> {
    try {
      const companies = await this.getCompaniesJoinedLastMonthUseCase.execute()
      res.status(200).json(companies)
    } catch (error) {
      res.status(500).json({ message: "Error al obtener empresas", error })
    }
  }

  async getCompaniesWithTransfersLastMonth(req: Request, res: Response): Promise<void> {
    try {
      const companies = await this.getCompaniesWithTransfersLastMonthUseCase.execute()
      res.status(200).json(companies)
    } catch (error) {
      res.status(500).json({ message: "Error al obtener empresas con transferencias", error })
    }
  }
}

