import "./PortfolioList.scss"

function PortfolioList({id, title, active, setSelected}) {
    return (
        <li className={active ? "portfoliolist active" : "portfoliolist"} onClick={()=>setSelected(id)}>
            {title}
        </li>
    )
}

export default PortfolioList
