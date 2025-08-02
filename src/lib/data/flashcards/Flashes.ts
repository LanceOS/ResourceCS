import acid from "./ACID.json";
import catastrophicForgetting from "./CatastrophicForgetting.json";
import complexities from "./Complexities.json";
import hyperparameters from "./Hyperparameters.json";
import mlParadigms from "./MLParadigms.json";
import memoization from "./Memoization.json";
import oop from "./OOP.json";
import polymorphism from "./Polymorphism.json";
import provisioning from "./Provisioning.json";
import sharding from "./Sharding.json";
import sla from "./SLA.json";

export const Flashes = [
    {
        name: "ACID",
        data: acid
    },
    {
        name: "Catastrophic Forgetting",
        data: catastrophicForgetting
    },
    {
        name: "Algorithmic Complexities",
        data: complexities
    },
    {
        name: "ML Hyperparameters",
        data: hyperparameters
    },
    {
        name: "ML Paradigms",
        data: mlParadigms
    },
    {
        name: "Memoization",
        data: memoization
    },
    {
        name: "Object-Oriented Programming",
        data: oop
    },
    {
        name: "Polymorphism",
        data: polymorphism
    },
    {
        name: "Provisioning",
        data: provisioning
    },
    {
        name: "Sharding",
        data: sharding
    },
    {
        name: "Service Level Agreement",
        data: sla
    }
];