const INITIAL_STATE = {
    videos: [],
    carregando: false,
    erro: false   
}

export default function busca(state = INITIAL_STATE, action){
    switch(action.type){
        case 'BUSCA_VIDEO_INICIO':
            return {
                carregando: true,
                videos: [],
                erro: false
            }

        case 'BUSCA_VIDEO_SUCESSO':
            return {
                carregando: false,
                videos: action.videos,
                erro: false
            }
            
        case 'BUSCA_VIDEO_ERRO':
            return {
                carregando: false,
                videos: [],
                erro: true
            }
            
        default: return state
    }
}
