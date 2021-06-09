import React from "react";
import { withRouter, Link } from "react-router-dom";
import './card.css'

const leagueLogo = {
  BSA: "/img/Campeonato_Brasileiro_Série_A_logo.png",
  ELC: "/img/Football_League_Championship.svg.png",
  PL:  "/img/premier_league.png",
  EC:  "/img/UEFA_Euro_2020_Logo.svg.png",
  FL1: "/img/Ligue1.svg.png",
  BL1: "/img/Bundesliga_logo_(2017).svg.png",
  DED: "/img/512px-Eredivisie_nieuw_logo_2017-.svg.png",
  PPL: "/img/Liga_NOS_logo.png",
  PD:  "/img/logo.png",
  WC:  "/img/FIFA_World_Cup.svg.png",
};

function Card(props) {
  const { emblemUrl, id, code, name, area } = props.card;
  return (
    <Link to={{pathname: 'competitions/' + id,}}>
      <div className="card">
        <div className="content">
          <div className="card-img">
            <img src={emblemUrl || leagueLogo[code]} alt={name} />
          </div>
          <div className="card-info">
            <h3>{name}</h3>
            <p>{area.name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default withRouter(Card);