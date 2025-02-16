import './star.css'

interface FormacaoDataProps {
    score: number,
    
}

export function Star({score}: FormacaoDataProps){
    return(
        <div>
            <ul className="avaliacao">
                {Array.from({ length: 5 }, (_, index) => {
                    const inteiro = Math.floor(score); // Parte inteira do score
                    const decimal = score - inteiro; // Parte decimal
                    
                    let className = "star-icon";
                    let content = "\u2606"; // ☆ (estrela vazia)

                    if (index < inteiro) {
                        className += " ativo";
                        content = "\u2605"; // ⭐ (estrela cheia)
                    } else if (index === inteiro && decimal >= 0.5) {
                        className += " meio";
                    }

                    return <li key={index} className={className}>{content}</li>;
                })}
            </ul>
        </div>
    )
}