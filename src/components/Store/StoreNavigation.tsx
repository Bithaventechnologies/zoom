const navigationItems = ['Home', 'Apps', 'Games', 'Deals']

const StoreNavigation = () => {
  return (
    <nav aria-label="Microsoft Store sections" className="hidden items-center gap-8 lg:flex">
      {navigationItems.map((item) => (
        <a
          className="text-sm font-medium text-[#262626] transition hover:text-[#0067b8]"
          href="#"
          key={item}
        >
          {item}
        </a>
      ))}
    </nav>
  )
}

export default StoreNavigation
