import buildings from "./buildingsData";

const seracrhKeywords = [];

buildings.forEach((building) => {
    seracrhKeywords.push(building.keywords);
    });

export default seracrhKeywords;