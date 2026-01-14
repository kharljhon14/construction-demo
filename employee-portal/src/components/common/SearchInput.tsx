import { Search } from 'lucide-react'
import { Input } from '../ui/Input'

export const SearchInput = () => {
  return (
    <Input
      placeholder="Search projects, sites, vendors..."
      icon={<Search size={16} />}
      aria-label="Search"
    />
  )
}
