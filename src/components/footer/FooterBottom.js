import React from 'react'

function FooterBottom () {
	let date = new Date();
	let year = date.getFullYear();
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        © {year}. Tous droits réservés. © <span className="text-designColor  @apply text-[#00fdff]">AkazDago</span>
      </p>
    </div>
  );
}

export default FooterBottom