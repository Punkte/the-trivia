class storage {
 
    constructor( key ) {
        this.key = key
        this.init()
    }

    init() {
        if( !localStorage.getItem( this.key ) ) {
            const template = {
                life: 5,
                score: 0,
                notPlayable: [],
                categoriesState: {}
            }
            localStorage.setItem( this.key, this.stringify( template ) )
        }
    }
    /**
     * Private method to stringify a JavaScript Object
     * @param {Object} obj 
     */
    stringify( obj ) {
        return JSON.stringify( obj )
    }

    /**
     * Private method to parse
     * @param {JSON} json 
     */
    parse( json ) {
        return JSON.parse( json )
    }

    /**
     * Private method to get game localStorage
     */
    getStorage() {
        return this.parse( localStorage.getItem( this.key ) )
    }

    /**
     * Private method to set localStorage with an object
     * @param {Object} obj 
     */
    setStorage( obj ) { 
        localStorage.setItem( this.key, this.stringify( obj ) )
    }

    setItem( key, value ) {
        const previousStorage = this.getStorage()
        previousStorage[key] = value
        this.setStorage( previousStorage )
    }
    
    getItem( key ) {
        const storage = this.getStorage()
        return storage[key]
    }

    clearGame() {
        localStorage.removeItem( this.key )
        this.init()
    }

}
let game = new storage( 'game' )

export default game