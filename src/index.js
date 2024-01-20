import './style.css'
import 'bootstrap';

const time = ['Real Madrid', 'Barcelona', 'Bayern de Munique', 'Manchester United', 'Liverpool', 'Juventus', 'Paris Saint-Germain', 'AC Milan', 'Chelsea', 'Manchester City', 'Borussia Dortmund', 'Inter de Milão', 'Ajax', 'Arsenal', 'Atlético de Madrid', 'Tottenham', 'Roma', 'Napoli', 'New Castle', 'Porto', 'Benfica', 'AZ', 'PSV']
const desafio = ['Contratar 5 jogadores sulamericanos e usar como titular', 'Contratar 5 jogadores europeus e usar como titular', 'Contratar 3 jogadores europeus e 2 sulamericanos e usar como titular', 'Contratar 2 jogadores sulamericanos e 3 europeus e usar como titular', 'Deixar 3 jogadores com mais de 91 de overall', 'Deixe ao menos 1 com 94 ou mais de overall', 'Contrate 3 promessas', 'Contrate um jogador bom e experiente', 'Contrate pelo menos dois jogadores de cada continente para promover uma equipe globalmente diversificada', 'Forme um núcleo de jogadores da mesma nacionalidade para fortalecer a identidade da equipe', 'Contrate três jogadores jovens, com menos de 21 anos, para desenvolvê-los e moldar o futuro da equipe', 'Contrate pelo menos dois jogadores da mesma liga ou país em que seu clube está situado, incentivando uma conexão mais forte com a comunidade local', 'Contrate uma dupla de jogadores com uma forte conexão no campo, seja pela nacionalidade, histórico de clube ou estilo de jogo', 'Contrate jogadores conhecidos por suas habilidades de assistência e crie um meio-campo criativo', 'Contrate jogadores que falem a mesma língua, promovendo uma melhor comunicação em campo', 'Contrate jovens promissores de academias de futebol ou equipes inferiores e desenvolva uma nova geração de lendas para o clube', 'Contrate três jogadores de elite de nacionalidades diferentes para fortalecer a competitividade internacional da equipe']
const objetivo = ['Ganhe o Campeonato Nacional', 'Ganhe a Copa Nacional', 'Ganhe a Supercopa da UEFA', 'Ganhe a UEFA Champions League', 'Conquiste o Triplo Campeonato Nacional', 'Vencer com Invencibilidade na Liga', 'Bicampeão da Champions League', 'Triplice Coroa', 'Ganhar 2 Champions League consecutivas', 'Ganhar a Champions League sem perder', 'Ganhar 2 Copa National e 1 Liga National dentro de 5 anos', 'Ganhar 3 Champions dentro de 5 anos', 'Em 1 temporada perca no maximo 3 jogos', 'Ganhar 3 ligas nacionais e 3 copas nacionais', 'Ser Bicampeão consecutivo da Liga National', 'Ser Tricampeao da Copa Nacional', 'Ganhe a Supercopa da UEFA 2 vezes', 'Passe 3 anos consecutivos sendo campeão pelo clube']
const escalacao = ['4-4-2', '4-3-3', '3-5-2', '4-2-3-1', '4-1-4-1', '3-4-3', '4-3-1-2', '4-5-1', '4-1-2-1-2', '5-3-2']

const changeBox = (boxId, msg) => {
    const box = document.getElementById(boxId)
    box.innerHTML = msg
}

const sortear = (dic) => {
    const theOne = dic[Math.floor(Math.random() * dic.length)]
    return theOne
}

document.querySelector('.button').addEventListener('click', () => {
    changeBox('time', sortear(time))
    changeBox('desafio', sortear(desafio))
    changeBox('objetivo', sortear(objetivo))
    changeBox('escalacao', sortear(escalacao))
})

document.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault()

        switch (e.target.className) {
            case 'time':
                changeBox(e.target.className, sortear(time))
                break
            case 'desafio':
                changeBox(e.target.className, sortear(desafio))
                break
            case 'objetivo':
                changeBox(e.target.className, sortear(objetivo))
                break
            case 'escalacao':
                changeBox(e.target.className, sortear(escalacao))
                break
            default:
                break
        }
    })
})