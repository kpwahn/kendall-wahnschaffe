function PinkBuilding({className}) {
  return (
    <svg className={className} width="430" height="1000" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="rgb(254 226 226)" />
        <rect width="2%" height="1.5%" fill="black" x="290" y="30" />
        <rect width="2%" height="1.5%" fill="black" x="305" y="30" />
        <rect width="2%" height="1.5%" fill="black" x="325" y="30" />
        <rect width="2%" height="1.5%" fill="black" x="340" y="30" />
        <rect width="2%" height="1.5%" fill="black" x="360" y="30" />
        <rect width="2%" height="1.5%" fill="black" x="375" y="30" />        
        <rect width="2%" height="1.5%" fill="black" x="395" y="30" />
        <rect width="2%" height="1.5%" fill="black" x="410" y="30" />
        <rect width="2%" height="1.5%" fill="black" x="290" y="55" />
        <rect width="2%" height="1.5%" fill="black" x="305" y="55" />     
        <rect width="2%" height="1.5%" fill="black" x="325" y="55" />
        <rect width="2%" height="1.5%" fill="black" x="340" y="55" />
        <rect width="2%" height="1.5%" fill="black" x="360" y="55" />
        <rect width="2%" height="1.5%" fill="black" x="375" y="55" />
        <rect width="2%" height="1.5%" fill="black" x="395" y="55" />
        <rect width="2%" height="1.5%" fill="black" x="410" y="55" />
        <rect width="2%" height="1.5%" fill="black" x="290" y="85" />
        <rect width="2%" height="1.5%" fill="black" x="305" y="85" />
        <rect width="2%" height="1.5%" fill="black" x="325" y="85" />
        <rect width="2%" height="1.5%" fill="black" x="340" y="85" />
        <rect width="2%" height="1.5%" fill="black" x="360" y="85" />
        <rect width="2%" height="1.5%" fill="black" x="375" y="85" />
        <rect width="2%" height="1.5%" fill="black" x="395" y="85" />
        <rect width="2%" height="1.5%" fill="black" x="410" y="85" />
        <rect width="2%" height="1.5%" fill="black" x="290" y="110" />
        <rect width="2%" height="1.5%" fill="black" x="305" y="110" />
        <rect width="2%" height="1.5%" fill="black" x="325" y="110" />
        <rect width="2%" height="1.5%" fill="black" x="340" y="110" />
        <rect width="2%" height="1.5%" fill="black" x="360" y="110" />
        <rect width="2%" height="1.5%" fill="black" x="375" y="110" />
        <rect width="2%" height="1.5%" fill="black" x="395" y="110" />
        <rect width="2%" height="1.5%" fill="black" x="410" y="110" />
    </svg>
  )
}

function OrangeBuilding({className}) {
  return (
    <svg className={className} width="200" height="250" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="rgb(253 230 138)" />
        <rect width="3%" height="7%" fill="black" x="54%" y="8%" />
        <rect width="3%" height="7%" fill="black" x="59%" y="8%" />
        <rect width="3%" height="7%" fill="black" x="65%" y="8%" />
        <rect width="3%" height="7%" fill="black" x="70%" y="8%" />
        <rect width="3%" height="7%" fill="black" x="76%" y="8%" />
        <rect width="3%" height="7%" fill="black" x="81%" y="8%" />
        <rect width="3%" height="7%" fill="black" x="87%" y="8%" />
        <rect width="3%" height="7%" fill="black" x="92%" y="8%" />
    </svg>
  )
}

export default function Index() {
  return (
    <main className="h-full relative">
      <div className="h-full">
        <PinkBuilding className="absolute bottom-0 left-0 scale-50 translate-y-1/2" />
        <OrangeBuilding className="absolute bottom-0 right-0 scale-50 translate-y-1/2" />
      </div>
    </main>
  );
}
