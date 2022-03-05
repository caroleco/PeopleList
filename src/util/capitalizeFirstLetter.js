/*Primeira letra em maíusculo

Ex: nota -> Nota*/

const capitalizaFirstLetter = string => {
    return string[0].toUpperCase() + string.slice(1);
}

export default capitalizaFirstLetter;