import type { Company } from "../../domain/entities/company.entity"
import type { CompanyRepository } from "../../domain/repositories/company.repository"

export class GetCompaniesWithTransfersLastMonthUseCase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(): Promise<Company[]> {
    return this.companyRepository.findCompaniesWithTransfersLastMonth()
  }
}

