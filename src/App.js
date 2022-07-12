
import рисунок4 from './Рисунок4.png' ;
import рисунок5 from './Рисунок5.png' ;
import рисунок6 from './Рисунок6.png' ;
import рисунок7 from './Рисунок7.png' ;
import рисунок8 from './Рисунок8.png' ;
import рисунок9 from './Рисунок9.png' ;
import рисунок102 from './Рисунок102.png' ;
import рисунок228 from './Рисунок228.png' ;
import image48 from './image48.png' ;
import image49 from './image49.png' ;
import { Container, Row, Col, Nav, Image } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function App() { 
  return (<>
  <html style={{ backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(224, 247, 252, 0.583333) 25.87%, #CAF2FA 100%)`, }}>
      <Container >
        <header >
        <Row>
        <p className="text-center mt-4 mb-4 fs-1 fw-bold " style={{ color: '#223867' }}>А вдруг СМА?</p>
        <p className="text-center mt-4 mb-4 fw-bolder fs-2" style={{ color: '#223867' }}>Выберите, кто Ваш пациент:</p>
          </Row>
          <Row className='justify-content-md-center'>
            <Col md='5' className="text-center mt-4 mb-1 fs-3 fw-bold " style={{ color: '#028CA6' }}>Взрослый</Col>
            <Col md='5'className="text-center mt-4 mb-1 fs-3 fw-bold" style={{ color: '#028CA6' }}>Ребенок</Col>
          </Row>
          </header>
            <main>
          <Row className='justify-content-md-center'>
            <Col md='5' className="text-center mt-2 mb-2">
            <img src={image48} style={{ maxHeight: '300px', maxWidth: '300px' }}/>
            </Col>
            <Col md='5'className="text-center mt-2 mb-2">
            <img   src={image49} style={{ maxHeight: '300px', maxWidth: '300px' }}/>
            </Col>
          </Row>
            
            <Row className='justify-content-md-center' style={{ color: '#223867', fontWeight: "normal", fontSize: '20px'}}>
            <Col md='5' className="text-start mt-4 mb-4" >
                    <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                       <Accordion.Body  className='shadow mb-5' style={{ border: '2px solid #068CA6',borderRadius: '10px' }}>
                       Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте. 

                        </Accordion.Body>
                  </Accordion.Item>
                     </Accordion>
                     <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                       <Accordion.Body className='shadow mb-5' style={{ border: '2px solid #068CA6',borderRadius: '10px' }}>
                       По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки. 


                        </Accordion.Body>
                  </Accordion.Item>
                     </Accordion>
                     <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                       <Accordion.Body className='shadow' style={{ border: '2px solid #068CA6',borderRadius: '10px' }}>
                       По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания. 

                        </Accordion.Body>
                  </Accordion.Item>
                     </Accordion>
              </Col>


              <Col md='5' className="text-start mt-4 mb-4">
                    <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                       <Accordion.Body className='shadow mb-4' style={{ border: '2px solid #068CA6',borderRadius: '10px' }}>
                                Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми
                                движениями нижних конечностей или с трудом тянущийся к предметам, но при этом с
                                осмысленным и ярким взглядом, улыбающийся и социально активный, вызывает настороженность
                                в отношении наличия СМА.


                        </Accordion.Body>
                  </Accordion.Item>
                     </Accordion>
                     <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                       <Accordion.Body className='shadow' style={{ border: '2px solid #068CA6',borderRadius: '10px' }}>
                                  Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение
                                  терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются
                                  дегенерации при прогрессировании заболевания 


                        </Accordion.Body>
                  </Accordion.Item>
                     </Accordion>
                     
              </Col>
           </Row>

           <Row className='justify-content-md-center'>
            <Col sm='5' className="mt-4 mb-5 fs-8 fw-bold" style={{ color: '#2A477D' }}>Сообщает ли один из ваших пациентов о следующих симптомах</Col>
            <Col sm='5'className="mt-4 mb-5 fs-8" style={{ color: '#068CA6' }}>(нажмите на любую иконку и узнайте больше)</Col>
            
      
          </Row>

            </main>

            <pading>
                     <div id='card1'>
            <Row className='justify-content-md-center'>
            <Col sm='3'><img  src={image48} class="round" style={{ maxHeight: '300px', maxWidth: '300px' }}/>
            <div id='text1' className="mt-4 mb-5 fs-3 fw-bold" style={{ color: '#2A477D', textAlign: 'center' }}>Взрослый</div>
            </Col>
           
                    
                   </Row> </div>
            </pading>
      </Container>
      </html>
      </>
  );
}

export default App;
