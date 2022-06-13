import Link from "next/link"

function HeaderItem({Icon, title, href='/'}) {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center cursor-pointer group w-12 md:w-20 hover:text-white">
          <Icon className="h-8 mb-1 group-hover:animate-pulse"/>
          <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
      </div>
    </Link>
  )
}

export default HeaderItem