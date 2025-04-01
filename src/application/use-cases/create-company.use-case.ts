import type { Company } from "../../domain/entities/company.entity"
import type { CompanyRepository } from "../../domain/repositories/company.repository"

export class CreateCompanyUseCase {
  constructor(private readonly companyRepository: CompanyRepository) {}

  async execute(company: Company): Promise<Company> {
    company.fechaAdhesion = new Date()
    return this.companyRepository.save(company)
  }
}

