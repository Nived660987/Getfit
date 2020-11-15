import React, { Component } from 'react';
import '../Meditation/Meditationblog.css';
import { BrowserRouter as Router, Link as RouterLink, Switch, Route } from 'react-router-dom';
import { Link, requirePropFactory } from '@material-ui/core';
import Meditation from './Meditation';

class Meditationblog extends Component {
	render() {
		return (
			<div className="Medit">
				<div className="Medit-header">
					<h1 style={{ color: 'black' }}>MEDITATION</h1>
					<p className="lead" style={{ color: 'black' }}>
						Meditation is the delicate art of doing nothing and letting go of all the efforts to relax into
						your true nature which is love, joy, and peace. Meditation relieves you from day to day stress
						quickly and gives you deep rest.
					</p>
				</div>
				<div className="poptable">
					<table>
						<tr>
							<td>
								<h1 style={{ color: 'black', fontStyle: 'normal', fontSize: '280%' }}>
									HOW TO MEDITATE: SIMPLE MEDITATION FOR BEGINNERS
								</h1>
								<h2 style={{ color: 'black', fontStyle: 'normal', fontSize: '200%', fontWeight: 'bold' }}>
									This Meditation Exercise Is An Excellent Introduction To Meditation Techniques.
								</h2>
								<ol>
									<h2>
										<li>
											Sit Or Lie Comfortably. You May Even Want To Invest In A Meditation Chair Or
											Cushion.
										</li>
									</h2>
									<h2>
										<li>
											Close Your Eyes. We Recommend Using One Of Our Cooling Eye Masks Or
											Restorative Eye Pillows If Lying Down.{' '}
										</li>
									</h2>
									<h2>
										<li>Make No Effort To Control The Breath; Simply Breathe Naturally.</li>
									</h2>

									<h2>
										<li>
											Focus Your Attention On The Breath And On How The Body Moves With Each
											Inhalation And Exhalation. Notice The Movement Of Your Body As You Breathe.
										</li>
									</h2>
									<h2>
										<li>
											{' '}
											Observe Your Chest, Shoulders, Rib Cage, And Belly. Simply Focus Your
											Attention On Your Breath Without Controlling Its Pace Or Intensity.{' '}
										</li>
									</h2>
									<h2>
										<li>If Your Mind Wanders, Return Your Focus Back To Your Breath.</li>
									</h2>
								</ol>

								<a href="/category/BeautySleep">
									<button className="Medit_music" href="/BeautySleep">
										<h2> RELAXING MEDITATION MUSIC </h2>
									</button>
								</a>
							</td>
						</tr>
					</table>
				</div>
				<div className="main-footer1">
					<div className="container1">
						<div className="content-wrap1">
							<div className="row">
								<div className="col1">
									<h1 style={{ fontStyle: 'normal' }}>More Information About Meditation</h1>
									<table width="100%">
										<tr>
											<td>
												<h1 style={{ color: 'white', fontWeight: 'bold' }}>
													<i>
														<center> TYPES OF MEDITATION </center>
													</i>
												</h1>

												<ol>
													<h2
														style={{
															fontSize: '38px',
														}}
													>
														CONCENTRATION MEDITATION
													</h2>
													<img alt="timer" src={require('../images/concen.jpg')} />
													<li style={{ fontSize: '180%' }}>
														{' '}
														Concentration meditation involves focusing on a single point.
														This could entail following the breath, repeating a single word
														or mantra, staring at a candle flame, listening to a repetitive
														gong, or counting beads on a mala.{' '}
													</li>
													<li style={{ fontSize: '180%' }}>
														{' '}
														Since focusing the mind is challenging, a beginner might
														meditate for only a few minutes and then work up to longer
														durations. In this form of meditation, you simply refocus your
														awareness on the chosen object of attention each time you notice
														your mind wandering.
													</li>
													<li style={{ fontSize: '180%' }}>
														{' '}
														Rather than pursuing random thoughts, you simply let them go.
														Through this process, your ability to concentrate improves.
													</li>
												</ol>

												<ol>
													<h2
														style={{
															fontSize: '38px',
														}}
													>
														MINDFULNESS MEDITATION
													</h2>
													<img alt="timer" src={require('../images/mind.jpg')} />

													<li style={{ fontSize: '180%', paddingTop: '10px' }}>
														Mindfulness meditation encourages the practitioner to observe
														wandering thoughts as they drift through the mind. The intention
														is not to get involved with the thoughts or to judge them, but
														simply to be aware of each mental note as it arises.
													</li>
													<li style={{ fontSize: '180%' }}>
														Through mindfulness meditation, you can see how your thoughts
														and feelings tend to move in particular patterns. Over time, you
														can become more aware of the human tendency to quickly judge an
														experience as good or bad, pleasant or unpleasant. With
														practice, an inner balance develops.{' '}
													</li>
													<li style={{ fontSize: '180%' }}>
														In some schools of meditation, students practice a combination
														of concentration and mindfulness. Many disciplines call for
														stillness — to a greater or lesser degree, depending on the
														teacher.
													</li>
												</ol>

												<h2
													style={{
														fontSize: '38px',
													}}
												>
													OTHER MEDITATION TECHNIQUES
												</h2>
												<img alt="timer" src={require('../images/other.jpg')} />
												<ol>
													<li style={{ fontSize: '180%' }}>
														There are various other meditation techniques. For example, a
														daily meditation practice among Buddhist monks focuses directly
														on the cultivation of compassion. This involves envisioning
														negative events and recasting them in a positive light by
														transforming them through compassion. There are also moving
														meditation techniques, such as tai chi, qigong, and walking
														meditation.<br></br>
													</li>
												</ol>
											</td>
										</tr>
									</table>

									<table>
										<tr>
											<td>
												<h1>BENEFITS OF MEDITATION</h1>
												<p style={{ fontSize: '180%' }}>
													If relaxation is not the goal of meditation, it is often a result.In
													the 1970s, Herbert Benson, MD, a researcher at Harvard University
													Medical School, coined the term “relaxation response" after
													conducting research on people who practiced transcendental
													meditation. The relaxation response, in Benson’s words, is “an
													opposite, involuntary response that causes a reduction in the
													activity of the sympathetic nervous system.”<br></br>
												</p>
												<ol>
													<li>
														<h3 style={{ fontSize: '180%', color: 'pink' }}>
															Lower Blood Pressure
														</h3>
													</li>
													<li>
														<h3 style={{ fontSize: '180%', color: 'pink' }}>
															Improved Blood Circulation
														</h3>
													</li>
													<li>
														<h3 style={{ fontSize: '180%', color: 'pink' }}>
															Lower Heart Rate
														</h3>
													</li>
													<li>
														<h3 style={{ fontSize: '180%', color: 'pink' }}>
															Less Perspiration
														</h3>
													</li>
													<li>
														<h3 style={{ fontSize: '180%', color: 'pink' }}>
															Slower Respiratory Rate
														</h3>
													</li>
													<li>
														<h3 style={{ fontSize: '180%', color: 'pink' }}>
															Less Anxiety
														</h3>
													</li>
													<li>
														<h3 style={{ fontSize: '180%', color: 'pink' }}>
															Lower Blood Cortisol Levels
														</h3>
													</li>
													<li>
														<h3 style={{ fontSize: '180%', color: 'pink' }}>
															More Feelings Of Well-Being
														</h3>
													</li>
													<li>
														<h3 style={{ fontSize: '180%', color: 'pink' }}>Less Stress</h3>
													</li>
													<li>
														<h3 style={{ fontSize: '180%', color: 'pink' }}>
															Deeper Relaxation
														</h3>
													</li>
												</ol>
											</td>
										</tr>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Meditationblog;
