import { Router } from "express"
import { CompanyController } from "../controllers/company.controller"
import { CreateCompanyUseCase } from "../../../application/use-cases/create-company.use-case"
import { GetCompaniesJoinedLastMonthUseCase } from "../../../application/use-cases/get-companies-last-month.use-case";
import { GetCompaniesWithTransfersLastMonthUseCase } from "../../../application/use-cases/get-companies-transfer-last-month.use-case";
import { MongoDBCompanyRepository } from "../../db/mongoDB/repositories/mongodb-company.repository";

const companyRoutes = Router()
const companyRepository = new MongoDBCompanyRepository()

const createCompanyUseCase = new CreateCompanyUseCase(companyRepository)
const getCompaniesJoinedLastMonthUseCase = new GetCompaniesJoinedLastMonthUseCase(companyRepository)
const getCompaniesWithTransfersLastMonthUseCase = new GetCompaniesWithTransfersLastMonthUseCase(companyRepository)

const companyController = new CompanyController(
  createCompanyUseCase,
  getCompaniesJoinedLastMonthUseCase,
  getCompaniesWithTransfersLastMonthUseCase,
)

companyRoutes.post("/", (req, res) => companyController.createCompany(req, res))
companyRoutes.get("/joined-last-month", (req, res) => companyController.getCompaniesJoinedLastMonth(req, res))
companyRoutes.get("/with-transfers-last-month", (req, res) => companyController.getCompaniesWithTransfersLastMonth(req, res))

export default companyRoutes;

