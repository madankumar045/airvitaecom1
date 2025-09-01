"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Calendar,
  Clock,
  User,
  Search,
  ArrowRight,
  Download,
  BookOpen,
  FileText,
  Heart,
  Shield,
  Globe,
  Eye,
  Brain,
  Home,
  Users,
  Lightbulb,
  Target,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: "1",
    title: "The Hidden Dangers of Indoor Air Pollution in Indian Cities",
    excerpt: "Discover the surprising sources of indoor air pollution and how they affect your health in urban India.",
    content: "Indoor air pollution is often 2-5 times worse than outdoor air...",
    author: "Dr. Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Health",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=300&fit=crop",
    featured: true,
  },
  {
    id: "2",
    title: "HEPA vs ULPA: Understanding Air Filter Technologies",
    excerpt:
      "A comprehensive guide to different air filtration technologies and their effectiveness against pollution.",
    content: "When choosing an air purifier, understanding filter types is crucial...",
    author: "Mike Chen",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=300&fit=crop",
    featured: false,
  },
  {
    id: "3",
    title: "Creating a Healthier Home Environment in Polluted Cities",
    excerpt: "Simple steps you can take today to improve your indoor air quality and protect your family.",
    content: "Your home should be your sanctuary, but poor air quality...",
    author: "Emma Wilson",
    date: "2024-01-10",
    readTime: "4 min read",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
    featured: false,
  },
  {
    id: "4",
    title: "The Science Behind Air Purification Technology",
    excerpt: "How modern air purifiers work to remove pollutants from your indoor environment.",
    content: "Air purification technology has advanced significantly...",
    author: "Dr. Robert Kim",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Science",
    image: "https://images.unsplash.com/photo-1574263867128-a3d5c1b1deae?w=500&h=300&fit=crop",
    featured: false,
  },
  {
    id: "5",
    title: "Air Pollution and Respiratory Health: What You Need to Know",
    excerpt: "Understanding the connection between air quality and respiratory health in India.",
    content: "For millions of people worldwide, air pollution is a daily health threat...",
    author: "Dr. Lisa Martinez",
    date: "2024-01-05",
    readTime: "5 min read",
    category: "Health",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=300&fit=crop",
    featured: false,
  },
  {
    id: "6",
    title: "Smart Home Integration for Air Quality Monitoring",
    excerpt: "How to integrate air purifiers with your smart home ecosystem for optimal air quality.",
    content: "The future of home air quality management is smart...",
    author: "Alex Thompson",
    date: "2024-01-03",
    readTime: "8 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
    featured: false,
  },
]

const categories = ["All", "Health", "Technology", "Science", "Lifestyle"]

// Complete eBook content from the provided text
const eBookContent = `Air Pollution & You: A Guide to Breathing Safer, Living Better
Ultimate Resource to Combat Everyday Air Hazards & Take Control of Your Health

Prepared by Nagesh

Introduction: Why This eBook Matters

Every day, we take over 20,000 breaths—yet most of us rarely consider the quality of the air we inhale. Air pollution, often invisible, is a global health emergency. According to the World Health Organization, it causes over 7 million premature deaths annually. It worsens respiratory conditions, triggers heart problems, weakens the immune system, and even impacts mental health and cognitive development.

This eBook is a wake-up call and a toolkit. It's designed for everyone: the concerned parent, the urban commuter, the student, the policymaker, and the health-conscious traveler. With 25 detailed, practical, and empowering sections, you'll discover how to identify pollution sources, protect yourself using technology, change daily habits, and push for systemic improvements.

As we progress through these pages, you'll see that tackling air pollution isn't just about policies and global summits—it's about daily decisions, personal awareness, and community action. Let's clear the air together, for today and for generations to come.

What is Air Pollution?

Air pollution is the introduction of harmful or excessive substances into the atmosphere that affect human health, the environment, and the planet's climate. These substances—called pollutants—can be either man-made or naturally occurring.

Man-made pollutants come from vehicle exhausts, industrial emissions, power plants, agricultural practices, and household activities. Natural pollutants arise from forest fires, volcanic activity, and dust storms. Regardless of the source, the growing concentration of these pollutants, especially in densely populated cities, has made air pollution a pressing public health crisis.

Key Pollutants Include:

• Particulate Matter (PM2.5 and PM10): Tiny particles that can lodge deep into the lungs and enter the bloodstream.
• Carbon Monoxide (CO): A colorless, odorless gas that prevents oxygen from entering the bloodstream.
• Nitrogen Oxides (NO and NO2): Emitted mainly from vehicles and power plants, causing inflammation of the airways.
• Sulfur Dioxide (SO2): Generated by the burning of fossil fuels, it irritates the respiratory system.
• Volatile Organic Compounds (VOCs): Found in paints, cleaning agents, and industrial processes; they react with sunlight to form ozone.
• Ozone (O3): A secondary pollutant formed by the reaction of VOCs and NOx under sunlight; causes respiratory distress.

Types of Air Pollutants: A Closer Look

Understanding the different types of air pollutants is key to knowing how to protect yourself. Each has unique sources, behaviors, and health impacts:

i. Particulate Matter (PM2.5 and PM10):
   • Source: Vehicle emissions, construction sites, industrial processes, forest fires.
   • Impact: These fine particles bypass the body's natural defenses and embed deep within lung tissue. PM2.5 is especially dangerous as it can enter the bloodstream, affecting organs and causing chronic diseases.

ii. Nitrogen Dioxide (NO2):
   • Source: Motor vehicles, fossil fuel combustion, power plants.
   • Impact: NO2 aggravates asthma, reduces lung function, and increases susceptibility to respiratory infections.

iii. Carbon Monoxide (CO):
   • Source: Incomplete combustion of fossil fuels, car exhausts, stoves, and wood-burning fires.
   • Impact: Interferes with oxygen delivery in the body, leading to headaches, fatigue, and in high doses, fatal poisoning.

iv. Sulfur Dioxide (SO2):
   • Source: Coal and oil burning, industrial processes.
   • Impact: Can cause eye irritation, respiratory issues, and contributes to acid rain.

v. Ground-Level Ozone (O3):
   • Source: Not directly emitted—formed through a chemical reaction between sunlight and pollutants like NOx and VOCs.
   • Impact: Causes coughing, chest tightness, and exacerbates chronic respiratory diseases.

vi. Volatile Organic Compounds (VOCs):
   • Source: Solvents, paints, fuel, air fresheners, and industrial emissions.
   • Impact: React with other pollutants to create smog and may cause eye, nose, and throat irritation, headaches, and long-term liver and kidney damage.

Each pollutant plays a role in reducing overall air quality, and long-term exposure—even at low concentrations—can be harmful. That's why understanding and monitoring them is crucial for making informed daily choices.

Health Effects of Air Pollution

Air pollution is not just a nuisance; it's a silent killer. Both short-term and long-term exposure to polluted air has a direct and profound impact on human health. According to global health authorities, air pollution is among the top 10 risk factors for disease burden worldwide.

Short-Term Effects:
• Irritation of the eyes, nose, and throat
• Coughing, sneezing, and shortness of breath
• Worsening of asthma and bronchitis symptoms
• Chest tightness and fatigue

Long-Term Effects:
• Respiratory diseases: Chronic obstructive pulmonary disease (COPD), asthma, and decreased lung function
• Cardiovascular conditions: Elevated risk of heart attacks, hypertension, and strokes due to inflammation caused by particulate matter
• Neurological disorders: Studies link air pollution to increased risk of cognitive decline, Alzheimer's, and developmental issues in children
• Cancer: Long-term exposure to airborne toxins and fine particles is linked to lung cancer and possibly bladder cancer
• Pregnancy complications: Exposure increases risks of low birth weight, premature delivery, and developmental disorders

Air pollution affects every organ system. It's not only an environmental concern—it's a public health emergency.

Who's Most at Risk?

While air pollution affects everyone, some groups are particularly vulnerable due to age, health conditions, occupation, or living conditions. Knowing who is most at risk can help you take extra precautions or advocate for those who need it most.

i. Children:
• Their lungs are still developing, and they breathe more air relative to their body weight
• Exposure during early years can cause permanent lung damage and increase asthma risk

ii. The Elderly:
• Aging weakens immune and respiratory systems
• Higher likelihood of chronic diseases like hypertension, heart problems, or diabetes exacerbated by poor air quality

iii. People with Pre-existing Conditions:
• Individuals with asthma, COPD, heart disease, or diabetes are more likely to suffer acute symptoms or hospitalizations

iv. Pregnant Women:
• Exposure can affect fetal development, leading to birth defects, low birth weight, or even stillbirths

v. Outdoor Workers:
• Traffic police, construction workers, and street vendors inhale polluted air for extended hours every day

vi. Low-Income Urban Dwellers:
• Often live in high-density areas near industrial zones or busy roads
• May lack access to clean indoor air or healthcare support

Understanding the risk groups allows governments, organizations, and families to implement targeted interventions.

Indoor Air Pollution: The Silent Intruder

Many assume that staying indoors means escaping pollution, but that's far from the truth. Indoor air can sometimes be 2 to 5 times more polluted than outdoor air, according to the U.S. Environmental Protection Agency (EPA).

Sources of Indoor Air Pollution:
• Cooking: Use of wood, coal, or kerosene in unventilated kitchens releases toxic gases
• Cleaning products: Many contain VOCs, which evaporate and accumulate in enclosed spaces
• Tobacco smoke: Contains over 7,000 chemicals, many of which are harmful
• Building materials: Asbestos, lead-based paints, and synthetic furnishings off-gas dangerous pollutants
• Mold and Dampness: Trigger allergies, asthma, and respiratory infections

Health Risks:
• Respiratory irritation and increased asthma attacks
• Headaches and fatigue
• Long-term exposure can contribute to cancer and neurological disorders

Solutions:
• Ensure proper ventilation and use of kitchen chimneys
• Avoid synthetic air fresheners and switch to eco-friendly cleaning agents
• Use certified air purifiers with HEPA filters
• Keep indoor plants like spider plant, peace lily, and areca palm to help absorb toxins

Recognizing the dangers of indoor air pollution is the first step to creating safer, healthier living spaces for your family.

Sources of Outdoor Air Pollution

Outdoor air pollution arises from a variety of both natural and anthropogenic (human-made) sources. In today's industrialized world, most ambient air pollution is caused by human activities that release pollutants into the atmosphere.

Primary Human-Made Sources:
• Vehicular Emissions: Cars, trucks, buses, and motorcycles emit PM2.5, NOx, CO, and VOCs. Traffic congestion in cities significantly worsens air quality.
• Industrial Activity: Factories, power plants, and refineries burn fossil fuels and release massive amounts of SO2, NOx, and VOCs into the air.
• Construction and Demolition: Dust and fine particulate matter are common by-products of infrastructure development.
• Agricultural Activities: Use of fertilizers and pesticides releases ammonia (NH3) and other harmful gases.
• Waste Burning: Open burning of garbage, especially plastics, releases dioxins and other carcinogenic toxins.

Natural Sources:
• Wildfires: Emit large volumes of PM2.5 and CO over vast areas.
• Volcanic Eruptions: Release SO2 and ash clouds.
• Dust Storms: Carry fine particulate matter across countries and continents.
• Pollen: Though natural, it contributes to allergic respiratory issues.

Key Insight: While natural sources have always existed, the exponential rise in anthropogenic pollution is what has tipped the scales, making air pollution a chronic global issue.

The Role of Climate Change

Air pollution and climate change are intricately linked—they influence each other in dangerous ways, creating a feedback loop that intensifies both crises.

How Air Pollution Contributes to Climate Change:
• Greenhouse Gases (GHGs): Emissions such as CO₂, methane (CH₄), and nitrous oxide (N₂O) trap heat in the atmosphere, leading to global warming.
• Black Carbon: A component of PM2.5, black carbon absorbs sunlight and directly heats the atmosphere. When it settles on ice or snow, it accelerates melting.

How Climate Change Worsens Air Pollution:
• Higher Temperatures: Accelerate the chemical reactions that form ground-level ozone, worsening respiratory issues.
• Droughts and Wildfires: More frequent and severe due to climate change, releasing vast quantities of PM and CO.
• Changing Wind Patterns: Affect the distribution and concentration of pollutants in urban areas.

Why It Matters:
Climate and air quality policies should be designed together. Reducing emissions from fossil fuels can simultaneously improve air quality and slow climate change. Solutions like renewable energy and electric transportation offer dual benefits.

Measuring Air Quality: AQI Explained

To protect yourself and take action, it's essential to understand how air quality is measured. The Air Quality Index (AQI) is a standardized tool used globally to report daily air quality levels.

What is AQI?
AQI converts complex air pollutant data into a single number and color code, helping individuals assess the health risk in real-time.

Key Pollutants Measured:
• PM2.5
• PM10
• Ozone (O₃)
• Nitrogen Dioxide (NO₂)
• Sulfur Dioxide (SO₂)
• Carbon Monoxide (CO)

AQI Scale (India/Central Pollution Control Board):
0–50: Good - Minimal impact
51–100: Satisfactory - Minor breathing discomfort to sensitive people
101–200: Moderate - Breathing discomfort to people with lung disease
201–300: Poor - Increased discomfort and risk of heart disease
301–400: Very Poor - Respiratory illness on prolonged exposure
401–500: Severe - Affects healthy people and seriously impacts those with illnesses

How to Stay Updated:
• Use mobile apps like SAFAR, AQICN, or IQAir.
• Check government and environmental agency websites.
• Install smart home monitors for real-time indoor/outdoor air quality alerts.

How to Read an Air Quality Report

Air quality reports may seem technical, but a little guidance makes them easy to understand and act upon. These reports offer insight into pollutant levels, forecast pollution trends, and provide health advisories.

Typical Sections of a Report:
• AQI Value and Category: Shows the overall air quality (e.g., 278 – "Poor").
• Dominant Pollutant: Identifies the main pollutant (e.g., PM2.5).
• Pollutant Concentration Levels: Measured in μg/m³ (micrograms per cubic meter).
• Health Advisory: Suggestions like "Avoid outdoor exercise" or "Wear a mask."
• Forecast: Predictions for next 24–72 hours, helpful for planning activities.

Understanding Units:
• μg/m³: Concentration of pollutant particles per cubic meter of air.
• PPM (parts per million): Used for gases like CO and NO₂.

Example Breakdown:
• AQI: 325 (Very Poor)
• Dominant Pollutant: PM2.5 – 180 μg/m³
• Advisory: "Sensitive groups should remain indoors. Use HEPA filters."

Pro Tip: Always match the AQI reading with personal risk levels. On "Very Poor" days, even healthy individuals should limit outdoor exposure, while sensitive groups must take protective action immediately.

The Global Impact of Air Pollution

Air pollution is more than a local issue—it's a global crisis that affects public health, ecosystems, weather patterns, and international economies. Pollutants can travel thousands of kilometers through the air, crossing national borders and creating shared challenges.

i. Health Impact on a Global Scale:
• Over 90% of the world's population breathes air that exceeds WHO pollution limits.
• According to The Lancet, air pollution caused an estimated 6.7 million premature deaths globally in 2019.
• Regions in South Asia, Sub-Saharan Africa, and Eastern Europe suffer disproportionately from high PM2.5 levels.

ii. Environmental Degradation:
• Pollutants like sulfur dioxide and nitrogen oxides contribute to acid rain, damaging forests, aquatic life, and soils.
• Ozone at ground level weakens plant life, reduces crop yields, and affects biodiversity.
• Black carbon from incomplete combustion accelerates the melting of glaciers and snowpacks, impacting freshwater sources.

iii. Climate Change Link:
• Greenhouse gases like carbon dioxide and methane trap heat, driving global warming.
• Short-lived climate pollutants (SLCPs) like black carbon and tropospheric ozone also contribute to rising temperatures.
• Air pollution and climate change are interlinked: reducing emissions improves air quality and slows climate change.

iv. International Cooperation Is Critical:
• Global agreements such as the Paris Agreement, UNECE's Gothenburg Protocol, and UN SDGs (Sustainable Development Goals) aim to combat air pollution and climate issues.
• However, disparities in enforcement, infrastructure, and economic resources slow global progress.

Economic Costs of Air Pollution

The financial consequences of air pollution ripple through health systems, labor markets, agriculture, and infrastructure. These costs are rarely visible to the average citizen but add up to trillions globally.

i. Health System Burden:
• In countries like India and China, air pollution-related diseases strain public healthcare.
• WHO estimates that air pollution leads to $5 trillion in annual welfare losses worldwide.

ii. Workforce Productivity:
• Workers affected by pollution suffer from fatigue, respiratory issues, and missed workdays.
• Cognitive impairments due to prolonged exposure may also reduce job performance.

iii. Agricultural Yield Reduction:
• Ground-level ozone, formed by NOx and VOCs, damages crops by affecting leaf physiology.
• Studies suggest up to 15% yield reduction in staple crops like wheat and soy in polluted regions.

iv. Tourism and Infrastructure Impact:
• Smog-filled cities deter tourism, affecting service economies.
• Acid rain and particulate deposition corrode historic buildings, monuments, and public infrastructure, requiring costly restoration.

v. Long-Term Economic Losses:
• According to the World Bank, air pollution reduces global GDP by up to 6.1% annually.
• Countries with high pollution levels face reduced foreign investment, public trust, and life expectancy.

Common Myths About Air Pollution

Despite growing awareness, myths and misinformation about air pollution persist. Debunking them is essential to drive personal and collective action.

i. "I live in a rural area, so air pollution doesn't affect me."
• False. Rural areas face pollution from crop burning, unregulated waste disposal, diesel generators, and pesticides.

ii. "Only outdoor air is harmful."
• Indoor air is often more polluted due to poor ventilation and accumulated toxins from household products.

iii. "Air purifiers solve everything."
• They help, but without source control (like clean cooking fuels and reduced emissions), they offer limited protection.

iv. "Masks are only for pandemics."
• High-efficiency masks like N95 protect against fine particles on high AQI days. They're a critical part of pollution defense.

v. "Pollution control is the government's job."
• While policies matter, individuals can reduce emissions through greener transport, reduced energy use, and lifestyle choices.

Global Policies and Treaties

Governmental regulations and global cooperation are essential in reducing pollution and enforcing clean air standards.

i. The Paris Agreement (2015):
• A climate accord involving over 190 countries, aiming to limit global warming and reduce GHG emissions. While focused on climate, it has indirect air quality benefits.

ii. WHO Air Quality Guidelines:
• Updated in 2021, these guidelines set maximum allowable levels for PM2.5, PM10, NO2, SO2, O3, and CO. They are not legally binding but serve as reference points for nations.

iii. The Clean Air Act (USA):
• A comprehensive federal law regulating air emissions, enabling the Environmental Protection Agency (EPA) to set standards for air quality and vehicle emissions.

iv. EU Ambient Air Quality Directives:
• Legally binding pollutant thresholds across the European Union, with penalties for countries failing to meet standards.

v. India's National Clean Air Programme (NCAP):
• Launched in 2019, it targets a 20–30% reduction in PM2.5 and PM10 by 2024 in 122 cities through monitoring, public awareness, and emission reductions.

Challenges:
• Enforcement and political will vary widely.
• Lack of funding, data transparency, and corruption hinder progress in many nations.

Role of Technology in Combating Air Pollution

Technology is playing a transformative role in detecting, managing, and reducing air pollution—both in industrial-scale solutions and individual action.

i. Air Quality Monitoring:
• Low-cost sensors (e.g., PurpleAir, AirBeam) allow local governments and citizens to track pollution in real time.
• Satellites (e.g., NASA's MODIS, ESA's Sentinel-5P) offer global mapping of pollutants.

ii. Emission Control Devices:
• Scrubbers and electrostatic precipitators reduce industrial smoke.
• Diesel Particulate Filters (DPFs) and Selective Catalytic Reduction (SCR) systems clean vehicle exhausts.

iii. Green Transportation:
• Electric vehicles (EVs), hydrogen fuel cell buses, and bicycle-sharing platforms reduce urban air pollution.
• Congestion pricing and ride-sharing apps reduce total emissions.

iv. Indoor Air Tech:
• Smart air purifiers with HEPA, activated carbon, and real-time sensors optimize indoor air quality.
• Home automation systems adjust ventilation and filter settings based on AQI readings.

v. Digital Tools & Apps:
• Platforms like IQAir, AirVisual, and Breezometer offer AQI forecasts, health recommendations, and pollution maps.

vi. Urban Planning Tools:
• AI-powered modeling helps city planners optimize green space, ventilation corridors, and traffic design for better air flow and reduced hotspots.

Technology, when paired with public engagement and policy enforcement, is a powerful ally in the fight for cleaner air.

Individual Actions That Make a Difference

While systemic change is crucial, individuals play an important role in reducing air pollution. Small changes in our habits and choices can collectively make a big impact.

i. Sustainable Transportation Choices:
• Walk, cycle, or use public transport when possible.
• Carpool or use ride-sharing apps to reduce vehicle numbers.
• Switch to electric or hybrid vehicles if feasible.

ii. Energy Efficiency at Home:
• Use energy-efficient appliances and LED lighting.
• Turn off lights, fans, and electronics when not in use.
• Insulate homes to reduce the need for excessive heating or cooling.

iii. Responsible Consumption:
• Avoid open burning of trash and plastics.
• Use biodegradable and eco-friendly products.
• Opt for renewable energy providers or solar panels where possible.

iv. Advocate and Educate:
• Spread awareness through social media, community events, and educational initiatives.
• Encourage local leaders and businesses to adopt cleaner practices.
• Support clean air campaigns and petitions.

v. Monitor and Act:
• Use AQI apps to plan outdoor activities on low-pollution days.
• Use air purifiers indoors during high AQI days.
• Wear high-quality masks in heavily polluted environments.

Innovations Shaping the Future of Clean Air

Beyond current technologies, emerging innovations are poised to revolutionize how we tackle air pollution.

i. AI-Driven Predictive Models:
• Machine learning algorithms forecast pollution trends, allowing cities to take proactive steps.
• AI integrates data from traffic, weather, and industrial sources to create dynamic pollution maps.

ii. Biofilters and Living Walls:
• Moss walls and bio-reactors using algae clean air while enhancing urban aesthetics.
• Living buildings integrate nature-based solutions into architecture.

iii. Pollution-Eating Pavements and Paints:
• Titanium dioxide-coated surfaces break down NOx and other pollutants.
• Smart road materials absorb and neutralize harmful gases.

iv. Drone-Based Monitoring and Cleanup:
• Swarms of drones can detect, analyze, and sometimes neutralize localized pollution.
• Used in industries and disaster zones for rapid intervention.

v. Hyperlocal Air Quality Networks:
• Community-run sensor grids help pinpoint street-level pollution sources.
• Real-time open data fosters citizen participation and accountability.

These futuristic tools, combined with strong regulation and community support, hold the promise of radically cleaner air in coming decades.

Air Pollution and Children's Health

Children are among the most vulnerable to air pollution due to their developing lungs, higher breathing rates, and time spent outdoors.

i. Health Risks Include:
• Increased asthma and bronchitis incidents.
• Stunted lung development and reduced lung function.
• Neurodevelopmental delays and lower cognitive scores.

ii. Exposure Points:
• Schools located near busy roads or factories.
• Playgrounds with poor air circulation.
• Homes using biomass stoves or exposed to second-hand smoke.

iii. Protection Measures:
• Planting trees and green buffers around schools and playgrounds.
• Promoting clean cooking fuels and indoor air filters at home.
• Advocating for clean school transportation and low-emission zones.

iv. Policy Recommendations:
• Mandating AQI monitoring in schools.
• Limiting vehicular traffic near education institutions.
• Educating children about pollution and protective habits.

Safeguarding children from pollution today protects the future health of entire generations.

Community-Led Initiatives and Success Stories

Empowering communities can lead to remarkable change. Many grassroots efforts around the world have successfully tackled pollution with innovation and collaboration.

i. Citizen Science Projects:
• Communities in Delhi and London installed low-cost AQI sensors to map pollution hotspots.
• This data led to advocacy and stricter local emissions control.

ii. Local Clean-Up Drives:
• Volunteer-led efforts removed industrial waste and planted trees in Jakarta's most polluted areas.
• Resulted in reduced PM2.5 readings and better community health.

iii. School-Based Awareness Programs:
• In California, schools ran anti-idling campaigns for parents' cars.
• Reduced CO2 and PM levels around school zones.

iv. Urban Farming and Green Rooftops:
• Cities like Singapore and Medellín promote urban greening to improve local air.
• These initiatives reduce heat islands and trap particulate matter.

v. Policy Advocacy from Below:
• Residents in Poland pressured local councils to ban coal heating.
• Citizens in Nairobi successfully lobbied for bans on plastic burning.

These examples prove that when communities take charge, real and lasting change is possible.

Conclusion: Breathing Towards a Cleaner Future

Air pollution is a critical global challenge, yet one that is solvable with collective awareness and action. This eBook has outlined the multifaceted dimensions of the issue—from health to economy, and from innovation to grassroots action.

Comprehensive Summary:
• Multifaceted Impact: Air pollution adversely affects physical health, mental well-being, agricultural productivity, biodiversity, and global economies.
• Shared Responsibility: Combating air pollution requires participation from governments, corporations, communities, and individuals.
• Future-Ready Solutions: Technological innovations, sustainable development, and education hold the keys to long-term change.
• Power of Awareness: Public understanding and accountability are essential for demanding and implementing change.

Take Action Today:
• Choose clean and sustainable transport.
• Reduce, reuse, and recycle consciously.
• Support pro-environment policies and leaders.
• Educate others and lead by example.

A cleaner future begins with every breath we protect.

The Economic Burden of Air Pollution

Air pollution is not only a silent killer but also a financial burden, draining resources across sectors. It affects healthcare systems, workforce efficiency, agriculture, real estate, and tourism.

Detailed Impacts:
• Healthcare System Strain:
  1. Rising hospitalization costs due to asthma, bronchitis, lung cancer, and cardiovascular issues.
  2. Greater dependency on long-term medication and respiratory therapy.
• Productivity Loss:
  1. Air pollution-related illnesses contribute to millions of lost workdays annually.
  2. Economic output suffers as chronic exposure reduces employee stamina and focus.
• Agricultural Damage:
  1. Pollutants such as ground-level ozone damage crops, reducing harvests.
  2. Soil contamination from acid rain affects long-term productivity.
• Tourism and Property Value:
  1. Tourists avoid cities with hazardous air, reducing income for local businesses.
  2. Property prices decline in high-pollution zones, affecting investments.
• Global Figures:
  1. WHO and World Bank estimate air pollution costs exceed $5 trillion per year globally.

Mental Health and Air Quality

The cognitive and emotional impacts of air pollution are increasingly acknowledged. Fine particulate matter doesn't just harm lungs—it also alters brain chemistry and function.

Insights into Impact:
• Cognitive Decline:
  1. Continuous exposure to PM2.5 linked to memory loss and diminished learning ability.
  2. Seniors exposed to pollution are more likely to develop dementia and Alzheimer's.
• Mental Illness:
  1. High-pollution days correlate with increased ER visits for anxiety and depression.
  2. Inflammation caused by pollutants impacts emotional regulation and stress levels.
• Youth Mental Development:
  1. Children in polluted environments show more behavioral disorders and attention issues.
• Neurological Damage:
  1. Ultrafine particles and heavy metals like lead cross the blood-brain barrier.
  2. Long-term exposure affects neuron development and neurotransmitter balance.
• Preventive Strategies:
  1. Prioritize clean air zones in mental healthcare institutions.
  2. Conduct mental health screenings in pollution-prone regions.

Indoor Air Pollution: Hidden but Harmful

While often overlooked, indoor pollution significantly contributes to global disease burdens. With people spending up to 90% of their time indoors, this silent threat deserves more attention.

Understanding the Threat:
i. Major Pollutants:
   • Smoke from cooking and tobacco.
   • VOCs from cleaning agents, furniture, and synthetic fabrics.
   • Biological agents like mold, pollen, and pet allergens.
ii. Health Consequences:
   • Short-term: Eye and respiratory irritation.
   • Long-term: Respiratory illness, heart disease, cancer.
iii. High-Risk Settings:
   • Poor ventilation in urban apartments.
   • Biomass cooking in rural households.
iv. Solutions:
   • Improve airflow with cross-ventilation and exhaust fans.
   • Use natural cleaning products and indoor plants.
   • Introduce clean cookstoves and air filtration systems.

The Role of Education in Combatting Air Pollution

Education transforms communities. By spreading knowledge, we empower individuals to adopt healthier habits, influence policy, and innovate solutions.

Key Areas of Focus:
i. Formal Education:
   • Integrate environmental science and AQI awareness in school curricula.
   • Encourage student-led green projects and local AQI mapping.
ii. Public Outreach:
   • Use posters, street theatre, and village campaigns to reach remote areas.
   • Involve community leaders in awareness efforts.
iii. Media and Tech:
   • Develop mobile apps for air quality tracking and alerts.
   • Utilize social media influencers to promote behavioral shifts.
iv. Professional Training:
   • Train urban planners, architects, and transport engineers in air-quality-centric design.
v. Global Knowledge Sharing:
   • Platforms for youth and researchers to exchange best practices internationally.

A Vision for 2030: Clean Air for All

A future where clean air is the norm is not a dream—it's a necessity. Vision 2030 encapsulates the global aspiration for healthy air and resilient communities.

Strategic Goals:
i. Accessible AQI Information:
   • Public access to hyperlocal air quality data.
   • Wearable devices for real-time exposure alerts.
ii. Greener Urban Design:
   • Cities prioritizing walking, cycling, and electric public transport.
   • Expansion of urban forests, green rooftops, and emission-free zones.
iii. International Collaboration:
   • Stronger global policies and emissions pacts.
   • Cross-border data sharing and emergency response protocols.
iv. Innovation and Youth Empowerment:
   • Government support for cleantech startups.
   • Youth-led green movements and environmental entrepreneurship.
v. The Outcome:
   • Cleaner skies, healthier citizens, balanced ecosystems.
   • A planet where every child can breathe without fear.`

// eBook data
const eBook = {
  title: "Air Pollution & You: A Guide to Breathing Safer, Living Better",
  subtitle: "Ultimate Resource to Combat Everyday Air Hazards & Take Control of Your Health",
  author: "Prepared by Nagesh",
  pages: "25+ detailed sections",
  description:
    "A comprehensive guide covering everything from understanding air pollutants to implementing personal protection strategies. Learn about indoor air quality, global policies, technological solutions, and community-led initiatives.",
  downloadUrl: "/ebook/air-pollution-guide.pdf",
  coverImage: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=600&fit=crop",
  topics: [
    "Understanding Air Pollutants (PM2.5, NO2, CO, etc.)",
    "Health Effects and Vulnerable Populations",
    "Indoor vs Outdoor Air Quality",
    "Reading Air Quality Index (AQI)",
    "Global Policies and Climate Change",
    "Technology Solutions and Innovations",
    "Individual Actions and Community Initiatives",
    "Economic Impact and Mental Health Effects",
    "Future Vision for Clean Air by 2030",
  ],
}

const ebookTopics = [
  {
    icon: Heart,
    title: "Health & Safety",
    description: "Understanding how air pollution affects your body and mind",
    items: [
      "PM2.5, NO2, CO pollutants",
      "Respiratory & cardiovascular effects",
      "Mental health impacts",
      "Vulnerable populations",
    ],
  },
  {
    icon: Shield,
    title: "Protection & Action",
    description: "Practical strategies for personal and family protection",
    items: ["Reading AQI reports", "Individual protection methods", "Technology solutions", "Daily protective habits"],
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description: "Understanding the worldwide impact and solutions",
    items: ["Climate change connection", "International policies", "Economic costs", "Success stories worldwide"],
  },
  {
    icon: Eye,
    title: "Monitoring & Awareness",
    description: "Tools and techniques for tracking air quality",
    items: ["AQI measurement systems", "Mobile apps and sensors", "Health advisories", "Pollution forecasting"],
  },
  {
    icon: Brain,
    title: "Science & Research",
    description: "Latest scientific findings and innovations",
    items: ["Pollutant behavior", "Health research", "Technology advances", "Future innovations"],
  },
  {
    icon: Home,
    title: "Indoor Air Quality",
    description: "Creating healthier living and working spaces",
    items: ["Indoor pollution sources", "Ventilation strategies", "Air purification", "Safe cleaning practices"],
  },
  {
    icon: Users,
    title: "Community Action",
    description: "Grassroots initiatives and collective solutions",
    items: ["Citizen science projects", "Local clean-up drives", "Policy advocacy", "Educational programs"],
  },
  {
    icon: Lightbulb,
    title: "Innovation & Future",
    description: "Emerging technologies and future solutions",
    items: ["AI-driven monitoring", "Smart city solutions", "Green technologies", "Vision 2030 goals"],
  },
  {
    icon: Target,
    title: "Personal Action Plan",
    description: "Practical steps you can take today",
    items: ["Transportation choices", "Energy efficiency", "Consumer decisions", "Advocacy opportunities"],
  },
]

export default function BlogClientPage() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  const handleDownloadEbook = () => {
    // Create a blob with the eBook content
    const blob = new Blob([eBookContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)

    // Create a temporary link element to trigger download
    const link = document.createElement("a")
    link.href = url
    link.download = "Air-Pollution-Guide-AirVita.txt"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // Clean up the URL object
    URL.revokeObjectURL(url)
  }

  const handlePreviewEbook = () => {
    // Create a new window with formatted content
    const previewWindow = window.open("", "_blank", "width=800,height=600,scrollbars=yes")
    if (previewWindow) {
      previewWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Air Pollution & You - Preview</title>
          <style>
            body { 
              font-family: Arial, sans-serif; 
              line-height: 1.6; 
              max-width: 800px; 
              margin: 0 auto; 
              padding: 20px; 
              background: #f9f9f9;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            h1 { color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px; }
            h2 { color: #059669; margin-top: 30px; }
            h3 { color: #7c3aed; }
            .section { margin-bottom: 30px; }
            ul { padding-left: 20px; }
            li { margin-bottom: 5px; }
            .highlight { background: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="content">
            <pre style="white-space: pre-wrap; font-family: Arial, sans-serif;">${eBookContent}</pre>
          </div>
        </body>
        </html>
      `)
      previewWindow.document.close()
    }
  }

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Clean Air Blog & Resources</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert insights on air quality, health, and environmental solutions plus our comprehensive free eBook
            </p>
          </div>

          {/* Featured eBook Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <Card className="overflow-hidden bg-gradient-to-r from-primary/5 to-green-400/5 border-primary/20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                {/* eBook Cover */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative w-64 h-80 rounded-lg overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600"></div>
                    <div className="absolute inset-4 bg-white rounded-lg flex flex-col justify-between p-6">
                      <div className="text-center">
                        <BookOpen className="w-12 h-12 mx-auto mb-3 text-blue-600" />
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Air Pollution & You</h3>
                        <p className="text-sm text-gray-600 mb-2">A Guide to Breathing Safer, Living Better</p>
                        <p className="text-xs text-gray-500">Ultimate Resource to Combat Everyday Air Hazards</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs text-gray-400">Prepared by Nagesh</p>
                        <p className="text-xs text-gray-400">25+ Detailed Sections</p>
                      </div>
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-green-500 text-white">FREE</Badge>
                  </div>
                </div>

                {/* eBook Details */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <Badge className="mb-3 bg-primary text-white">
                      <FileText className="h-4 w-4 mr-1" />
                      Free Download
                    </Badge>
                    <h2 className="text-3xl font-bold mb-2">{eBook.title}</h2>
                    <p className="text-lg text-muted-foreground mb-4">{eBook.subtitle}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                      <span>By {eBook.author}</span>
                      <span>•</span>
                      <span>{eBook.pages}</span>
                    </div>
                    <p className="text-muted-foreground mb-6">{eBook.description}</p>
                  </div>

                  {/* Topics Covered Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {ebookTopics.slice(0, 9).map((topic, index) => (
                      <div key={index} className="bg-white/50 rounded-lg p-4 border border-primary/10">
                        <div className="flex items-center space-x-2 mb-2">
                          <topic.icon className="w-5 h-5 text-primary" />
                          <h4 className="font-semibold text-sm">{topic.title}</h4>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{topic.description}</p>
                        <ul className="text-xs text-muted-foreground space-y-1">
                          {topic.items.map((item, idx) => (
                            <li key={idx}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Download Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" onClick={handleDownloadEbook} className="bg-primary hover:bg-primary/90">
                      <Download className="h-5 w-5 mr-2" />
                      Download Free eBook (Text)
                    </Button>
                    <Button variant="outline" size="lg" onClick={handlePreviewEbook}>
                      <BookOpen className="h-5 w-5 mr-2" />
                      Preview Online
                    </Button>
                  </div>

                  {/* Additional Info */}
                  <div className="bg-white/50 rounded-lg p-4 border border-primary/10">
                    <p className="text-sm text-muted-foreground">
                      <strong>📚 Comprehensive Guide:</strong> This 25+ section eBook covers everything from basic air
                      pollution concepts to advanced protection strategies. Perfect for families, students, and
                      health-conscious individuals looking to improve their air quality knowledge.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Search and Categories */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Search articles..." className="pl-10" />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <Badge className="absolute top-4 left-4">Featured</Badge>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <Badge variant="outline" className="w-fit mb-3">
                      {featuredPost.category}
                    </Badge>
                    <h2 className="text-2xl lg:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <Link href={`/blog/${featuredPost.id}`}>
                      <Button>
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                    <Badge variant="secondary" className="absolute top-3 left-3">
                      {post.category}
                    </Badge>
                  </div>
                  <CardHeader className="pb-3">
                    <h3 className="text-lg font-semibold line-clamp-2">{post.title}</h3>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        Read Article
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-primary to-green-600 text-white border-0">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Start Your Clean Air Journey Today</h3>
                <p className="text-lg opacity-90 mb-6">
                  Download our comprehensive guide and take the first step towards protecting your health and the
                  environment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={handleDownloadEbook} className="bg-white text-primary hover:bg-gray-100">
                    <Download className="h-5 w-5 mr-2" />
                    Get Your Free eBook Now
                  </Button>
                  <Link href="/products">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
                    >
                      Explore Our Products
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
}
