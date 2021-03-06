import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAllAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './reponses.reducer';
import { IReponses } from 'app/shared/model/reponses.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IReponsesProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class Reponses extends React.Component<IReponsesProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { reponsesList, match } = this.props;
    return (
      <div>
        <h2 id="reponses-heading">
          Reponses
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create new Reponses
          </Link>
        </h2>
        <div className="table-responsive">
          {reponsesList && reponsesList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Idreponse</th>
                  <th>Proposition</th>
                  <th>Question</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {reponsesList.map((reponses, i) => (
                  <tr key={`entity-${i}`}>
                    <td>
                      <Button tag={Link} to={`${match.url}/${reponses.id}`} color="link" size="sm">
                        {reponses.id}
                      </Button>
                    </td>
                    <td>{reponses.idreponse}</td>
                    <td>
                      {reponses.propositionId ? <Link to={`propositions/${reponses.propositionId}`}>{reponses.propositionId}</Link> : ''}
                    </td>
                    <td>{reponses.questionId ? <Link to={`questions/${reponses.questionId}`}>{reponses.questionId}</Link> : ''}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`${match.url}/${reponses.id}`} color="info" size="sm">
                          <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${reponses.id}/edit`} color="primary" size="sm">
                          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                        </Button>
                        <Button tag={Link} to={`${match.url}/${reponses.id}/delete`} color="danger" size="sm">
                          <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <div className="alert alert-warning">No Reponses found</div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ reponses }: IRootState) => ({
  reponsesList: reponses.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reponses);
