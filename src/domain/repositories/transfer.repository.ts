import type { Company } from "../entities/company.entity"

export interface CompanyRepository {
  save(company: Company): Promise<Company>
  findCompaniesJoinedLastMonth(): Promise<Company[]>
  findCompaniesWithTransfersLastMonth(): Promise<Company[]>
}
