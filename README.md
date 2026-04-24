# Invoice App

A fully functional Invoice Management Application built with React 18, TypeScript, and Tailwind CSS. Complete with CRUD operations, form validation, status filtering, and full responsiveness.

## ✨ Features

### Core Functionality
- ✅ **Create Invoices** - Complete form with bill from/to sections and item list
- ✅ **Read Invoices** - View invoice list with detailed view on click
- ✅ **Update Invoices** - Edit existing invoices and save changes
- ✅ **Delete Invoices** - Delete with confirmation modal to prevent accidents
- ✅ **Draft Management** - Save invoices as drafts and edit later
- ✅ **Mark as Paid** - Change pending invoices to paid status

### Advanced Features
- ✅ **Form Validation** - Client name, email format, quantity/price validation
- ✅ **Status Filtering** - Filter by All, Draft, Pending, or Paid
- ✅ **Light & Dark Mode** - Theme toggle with localStorage persistence
- ✅ **Empty State** - Person holding microphone illustration with helpful message
- ✅ **Visual Feedback** - Hover states on all interactive elements
- ✅ **PDF Export** - Download invoices as professional PDF files
- ✅ **Responsive Navigation** - Top header on mobile/tablet, left sidebar on desktop
- ✅ **Editable Bill From** - Customize company information for each invoice
- ✅ **Placeholder-based Form** - Clean input fields with helpful placeholder text

### Responsive Design
- ✅ **Mobile** (320px+) - Single column layout with optimized spacing
- ✅ **Tablet** (640px+) - 2-column form grids, better spacing
- ✅ **Desktop** (1024px+) - Full multi-column layouts
- ✅ **No horizontal scrolling** - Content fits all screen sizes

### Accessibility
- ✅ Semantic HTML elements
- ✅ Form labels and proper associations
- ✅ Modal focus management
- ✅ ESC key support for modals
- ✅ WCAG AA color contrast
- ✅ Keyboard navigation support

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| **Frontend Framework** | React 18 |
| **Language** | TypeScript 6.0.3 |
| **Styling** | Tailwind CSS 3.4.1 |
| **Routing** | React Router v6 |
| **Build Tool** | Vite 8.0.10 |
| **State Management** | Context API + LocalStorage |
| **Icons** | React Icons 5.6.0 |
| **Date Formatting** | date-fns 4.1.0 |
| **PDF Generation** | jsPDF |
| **Utilities** | UUID 14.0.0 |

## 📦 Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── EmptyState.tsx      # Empty invoice list state with SVG
│   ├── Filter.tsx          # Status filter dropdown
│   ├── InvoiceListItem.tsx # Single invoice row (mobile/desktop)
│   ├── Logo.tsx            # SVG logo component
│   ├── Sidebar.tsx         # Left navigation with theme toggle
│   └── StatusBadge.tsx     # Status badge with color coding
│
├── pages/                   # Page-level components
│   ├── InvoiceListPage.tsx # Invoice list with filter
│   ├── InvoiceDetailPage.tsx # Single invoice view & actions
│   └── InvoiceFormPage.tsx # Create/edit invoice form
│
├── context/                 # Context providers
│   ├── ThemeContext.tsx    # Light/dark mode provider
│   └── InvoiceContext.tsx  # Invoice CRUD & filtering
│
├── types/                   # TypeScript type definitions
│   └── index.ts            # Invoice, InvoiceItem, CreateInvoiceInput
│
├── utils/                   # Helper functions
│   ├── dateUtils.ts        # Date formatting utilities
│   └── pdfGenerator.ts     # PDF export functionality
│
├── App.tsx                 # Main app with routing
└── main.tsx                # Vite entry point
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/Faith-Anthony/Invoiceapp.git
cd Invoiceapp
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 📋 Form Features

### Create/Edit Invoice Form
- **Bill From Section** - Editable company information (name, email, address, city, postal code, country)
- **Bill To Section** - Client name, email, address, city, postal code, country
- **Invoice Details** - Invoice date (auto-set), due date, status selector
- **Item List** - Dynamic items with description, qty, price, and total
  - Add multiple items with "Add Item Row" button
  - Remove items with trash icon
  - Automatic total calculation
- **Placeholder Inputs** - Clean form fields with helpful placeholder text
- **Validation Messages** - Real-time error feedback
- **Save/Cancel Actions** - Clear CTA buttons

### Invoice Actions
- **View Details** - Click any invoice to see full details
- **Edit Invoice** - Modify any invoice including company and client info
- **Download PDF** - Export invoice as professional PDF with formatted layout
- **Mark as Paid** - Change pending invoices to paid status
- **Delete Invoice** - Remove invoices with confirmation modal

## 🎨 Responsive Breakpoints

| Screen Size | Layout | Features |
|------------|--------|----------|
| 320px+ (Mobile) | Single column | Stacked forms, 2-col item grid, full-width buttons |
| 640px+ (Tablet) | 2-column forms | sm: breakpoint, better spacing, side-by-side buttons |
| 1024px+ (Desktop) | 3+ columns | Full grid layouts, optimal spacing |

## 💾 Data Persistence

- **LocalStorage Key: `invoices`** - Stores all invoice data
- **LocalStorage Key: `theme`** - Stores light/dark preference
- **Format**: JSON with full invoice objects including items, dates, status

## ♿ Accessibility Features

✅ **Semantic HTML**
- Proper heading hierarchy (h1, h2)
- Form elements with `<label>` associations
- Buttons for actions, links for navigation

✅ **Keyboard Navigation**
- Tab through form fields
- Enter to submit forms
- ESC to close delete confirmation modal
- Space/Enter on buttons

✅ **Visual Design**
- WCAG AA color contrast ratios
- Focus visible on interactive elements
- Status badges with clear color coding
- Error states with red background + text

✅ **Focus Management**
- Delete modal traps focus
- Cancel/Delete buttons are clear CTAs
- Proper focus order throughout app

## 📊 Invoice Data Structure

```typescript
interface Invoice {
  id: string
  invoiceNumber: string
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
  createdAt: string
  items: InvoiceItem[]
  total: number
  status: 'draft' | 'pending' | 'paid'
  notes?: string
}

interface InvoiceItem {
  id: string
  description: string
  quantity: number
  price: number
  total: number
}
```

## 🎯 Trade-offs & Decisions

| Decision | Rationale |
|----------|-----------|
| **Context API over Redux** | Simpler setup for this scope, no extra dependencies |
| **LocalStorage only** | Meets requirements, faster than IndexedDB setup |
| **Tailwind CSS** | Utility-first, responsive design, no extra CSS needed |
| **React Router v6** | Modern, built-in hooks support, optimal code splitting |
| **TypeScript strict mode** | Catches errors early, better IDE support, cleaner code |
| **Vite over Create React App** | 10x faster builds, modern tooling, better DX |

## 🔧 Future Improvements

- [ ] Email invoice functionality
- [ ] Cloud backend integration
- [ ] User authentication
- [ ] Invoice templates
- [ ] Advanced analytics/dashboard
- [ ] Recurring invoices
- [ ] Multi-currency support
- [ ] File upload for attachments
- [ ] Invoice comments/history
- [ ] Bulk invoice operations

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Sign up at [vercel.com](https://vercel.com)
3. Connect your GitHub repository
4. Click "Deploy"
5. Set environment variables if needed

```bash
# Or use Vercel CLI
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the app: `npm run build`
2. Drag & drop the `dist` folder to Netlify
3. Or connect GitHub for auto-deployment

## 👨‍💻 Development Notes

### Available Scripts
- `npm run dev` - Start dev server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking

### Performance Notes
- Component memoization used where needed
- Lazy loading with React Router
- Tailwind CSS purging unused styles
- Optimized bundle size (~150KB gzip)

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 Next Steps for Contributors

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

ISC License - See LICENSE file for details

## 👤 Author

Faith Anthony

---

