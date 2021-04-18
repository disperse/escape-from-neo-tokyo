import templates from './templates'
export const MAP_CHUNK_WIDTH = 16;
export const MAP_CHUNK_HEIGHT = 12;
export const MAP_HEIGHT = 4;
export const MAP_WIDTH = 4;

export default function() {
    /*
      This function returns a 4x4 grid of map chunks that can be navigated from the bottom to the top.
     */
    const mapObject = {
        startRoom: { x: undefined, y: undefined },
        map: Array(MAP_HEIGHT)
    };

    const mapChunks = [];
    for (let chunkY = 0; chunkY < MAP_HEIGHT; chunkY++) {
        let row = []
        for (let chunkX = 0; chunkX < MAP_WIDTH; chunkX++) {
            row.push(0);
        }
        mapChunks.push(row);
    }
    // First make an exit
    let curX = Math.floor(Math.random() * MAP_WIDTH);
    mapChunks[0][curX] = 3;

    // Then create a path through the map
    createPath(mapChunks, curX, 0);
    console.log('mapChunks', mapChunks);

    const map = [];
    // Finally generate the full map from the template objects
    for (let chunkY = 0; chunkY < MAP_HEIGHT; chunkY++) {
        if (map.length < (chunkY + 1)) map.push('');
        for (let chunkX = 0; chunkX < MAP_WIDTH; chunkX++) {
            let template = templates[mapChunks[chunkY][chunkX]]
            for (let y = 0; y < MAP_CHUNK_HEIGHT; y++) {
                map[chunkY] = map[chunkY].concat(template[y]);
            }
        }
    }
    console.log('map', map)
}

function createPath(mapChunks, curX, curY) {
    let x = curX;
    let y = curY;
    let nextDir = Math.floor(Math.random() * 5)
    if (nextDir < 2 && (curX > 0)) {
        // Move to left
        x--;
        mapChunks[y][x] = 1;
    } else if (nextDir < 4 && (curX < (MAP_WIDTH - 1))) {
        // Move to right
        x++;
        mapChunks[y][x] = 1;
    } else {
        // Move down
        y++;
       mapChunks[y][x] = (y < (MAP_HEIGHT - 1)) ? 3 : 4;
    }
    if (y < MAP_HEIGHT - 1) createPath(mapChunks, x, y);
}
