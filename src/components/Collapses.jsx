import { useState } from "react"


function Collapsed({data}) {
    const [openItems, setOpenItems] = useState([]);

    const toggle = (i) => {
        if (openItems.includes(i)) {
            setOpenItems(openItems.filter(item => item !== i));
        } else {
            setOpenItems([...openItems, i]);
        }
    };

    return (
            <div className="collapsed">
                {data.map((item, i) => (
                    <div className="item" key={item.id}>
                        <div className="title">
                            <h2>{item.question}</h2>
                            <span className="toggle" onClick={() => toggle(i)}>{openItems.includes(i) ? <img src={Arrow} alt="Flèche" className="rotate"></img> : <img src={Arrow} alt="Flèche" className="rotate-neg"></img>}</span>
                        </div>
                        <div className={openItems.includes(i) ? 'content-show' : 'content'}>
                            {Array.isArray(item.answer) ? (
                                <ul>
                                    {item.answer.map((answerItem, index) => (
                                        <li key={index}>{answerItem}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{item.answer}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
    );
}

export default Collapsed;
