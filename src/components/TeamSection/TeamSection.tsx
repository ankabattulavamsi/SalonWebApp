import { Box, Card } from "@mui/material";
import { Container } from "@mui/system";
import React, { Component } from "react";
import { TeamData, teamdata } from "../../utils/fixtures/expertTeam/team";

export default class TeamSection extends Component {
  render() {
    return (
      <Box>
        <Container>
          {teamdata.map((team: TeamData) => {
            return (
              <Card key={team.id} >
                <img src={team.imgeUrl} alt={team.title} />
              </Card>
            );
          })}
        </Container>
      </Box>
    );
  }
}
