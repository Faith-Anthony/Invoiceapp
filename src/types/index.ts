export type InvoiceStatus = 'draft' | 'pending' | 'paid'

export interface InvoiceItem {
  id: string
  description: string
  quantity: number
  price: number
  total: number
}

export interface Invoice {
  id: string
  invoiceNumber: string
  // Bill From - Company Info
  companyName: string
  companyEmail: string
  companyAddress: string
  companyCity?: string
  companyPostalCode?: string
  companyCountry?: string
  // Bill To - Client Info
  clientName: string
  clientEmail: string
  clientAddress: string
  clientCity?: string
  clientPostalCode?: string
  clientCountry?: string
  dueDate: string
  createdAt: string
  items: InvoiceItem[]
  total: number
  status: InvoiceStatus
  notes?: string
}

export interface CreateInvoiceInput {
  companyName: string
  companyEmail: string
  companyAddress: string
  companyCity?: string
  companyPostalCode?: string
  companyCountry?: string
  clientName: string
  clientEmail: string
  clientAddress: string
  clientCity?: string
  clientPostalCode?: string
  clientCountry?: string
  dueDate: string
  items: InvoiceItem[]
  total: number
  status: InvoiceStatus
  notes?: string
}
