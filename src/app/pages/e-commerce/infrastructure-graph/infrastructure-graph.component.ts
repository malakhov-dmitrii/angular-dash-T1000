import { Component, OnInit } from "@angular/core";

@Component({
    selector: "ngx-infrastructure-graph",
    templateUrl: "./infrastructure-graph.component.html",
    styleUrls: ["./infrastructure-graph.component.scss"]
})
export class InfrastructureGraphComponent implements OnInit {
    links = [
        {
            id: "a",
            source: "1",
            target: "4"
        },
        {
            id: "b",
            source: "2",
            target: "4"
        },
        {
            id: "c",
            source: "3",
            target: "4"
        },
        {
            id: "d",
            source: "4",
            target: "5"
        },
        {
            id: "e",
            source: "1",
            target: "5"
        },
        {
            id: "f",
            source: "5",
            target: "6"
        },
        {
            id: "ff",
            source: "71",
            target: "5"
        },
        {
            id: "brachLink1",
            source: "branch1",
            target: "branch4"
        },
        {
            id: "brachLink2",
            source: "branch2",
            target: "branch4"
        },
        {
            id: "brachLink3",
            source: "branch3",
            target: "branch4"
        },
        {
            id: "brachLink4",
            source: "branch4",
            target: "4"
        },
        {
            id: "brachLink5",
            source: "branch4",
            target: "email"
        }
    ];
    clusters = [
        {
            id: "cluster0",
            label: "192.168.100.2-4",
            childNodeIds: ["1", "2", "3"]
        },
        {
            id: "cluster02",
            label: "Service processing",
            childNodeIds: ["7", "71", "6"]
        },
        {
            id: "cluster02",
            label: "Head office",
            childNodeIds: ["cluster01", "5", "cluster02"]
        },
        {
            id: "cluster01",
            label: "Section 01",
            childNodeIds: ["cluster0", "4"],
            fontWeight: 700,
            fontSize: 24
        },
        {
            id: "cluster03",
            label: "Branch",
            childNodeIds: ["branch1", "branch2", "branch3", "branch4"],
            fontWeight: 700,
            fontSize: 24
        }
    ];
    nodes = [
        {
            id: "1",
            label: "PC A",
            color: "black",
            selected: false
        },
        {
            id: "2",
            label: "PC 1B",
            color: "black"
        },
        {
            id: "3",
            label: "PC 1C",
            color: "black"
        },
        {
            id: "4",
            label: "Section switch"
        },
        {
            id: "5",
            label: "Cluster Switch"
        },
        {
            id: "6",
            label: "S1"
        },
        {
            id: "7",
            label: "PC"
        },
        {
            id: "71",
            label: "PC"
        },
        {
            id: "branch1",
            label: "PC"
        },
        {
            id: "branch2",
            label: "PC"
        },
        {
            id: "branch3",
            label: "Branch Service"
        },
        {
            id: "branch4",
            label: "Branch Switch"
        },
        {
            id: "email",
            label: "email"
        }
    ];

    constructor() {}

    ngOnInit() {}
}
