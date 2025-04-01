import type { Company } from "../../domain/entities/company.entity"
import type { CompanyRepository } from "../../domain/repositories/company.repository"

export class GetCompaniesJoinedLastMonthUseCase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(): Promise<Company[]> {
    return this.companyRepository.findCompaniesJoinedLastMonth()
  }
}

