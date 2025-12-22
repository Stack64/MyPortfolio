// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>SOHAIL DEV</h1>
//     </>
//     // <>
//     //   <div>
//     //     <a href="https://vite.dev" target="_blank">
//     //       <img src={viteLogo} className="logo" alt="Vite logo" />
//     //     </a>
//     //     <a href="https://react.dev" target="_blank">
//     //       <img src={reactLogo} className="logo react" alt="React logo" />
//     //     </a>
//     //   </div>
//     //   <h1>Vite + React</h1>
//     //   <div className="card">
//     //     <button onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </button>
//     //     <p>
//     //       Edit <code>src/App.jsx</code> and save to test HMR
//     //     </p>
//     //   </div>
//     //   <p className="read-the-docs">
//     //     Click on the Vite and React logos to learn more
//     //   </p>
//     // </>
//   )
// }

// export default App
import CardGLB from './assets/card.glb'
import LanyardPNG from './assets/lanyard.png'
import JioLogo from './assets/jio.svg'
import * as THREE from 'three'
import { useEffect, useRef, useState } from 'react'
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber'
import { useGLTF, useTexture, Environment, Lightformer } from '@react-three/drei'
import { BallCollider, CuboidCollider, Physics, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'

extend({ MeshLineGeometry, MeshLineMaterial })
// useGLTF.preload('https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb')
// useTexture.preload('https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg')

useGLTF.preload(CardGLB)
useTexture.preload(LanyardPNG)

export default function App() {
  const [theme, setTheme] = useTheme()
  const isDark = theme === 'dark'

  const experiences = [
    {
      id: 'reliance-jio',
      company: 'Reliance Jio',
      logo: JioLogo,
      role: 'Software Development Engineer I, JiomHere · Springboot, Java, Spring MVC, SQL, Kafka, Hazelcast, Nginx, JavaScript, Linux',
      dates: '2023 - Present',
      highlights: [
        'Designed and shipped backend APIs and workflows to support core product features end-to-end.',
        'Improved system reliability and performance through profiling, caching, and async processing (Kafka/Hazelcast).',
        'Implemented secure integrations, logging/monitoring, and CI-friendly deployments on Linux/Nginx.',
      ],
    },
    // { company: 'Lyft', role: 'Team Lead, Visualization · Level 5 Self Driving', dates: '2021 - 2023' },
    // { company: 'Google', role: 'Software Engineer · AMP, Stories & Area 120', dates: '2019 - 2021' },
    // { company: 'AMP Project', role: 'Software Engineer · Open Source Maintainer', dates: '2018 - 2019' },
  ]

  // Scaffold: replace with your real projects later
  const projects = [
    {
      id: 'project-1',
      title: 'ShortURL',
      description: 'A URL shortening service that allows you to create short, unique URLs for your links.',
      tech: ['React', 'Spring Boot', 'PostgreSQL','Docker'],
      links: [
        { label: 'GitHub', href: 'https://github.com/stack64' },
        { label: 'Live', href: 'https://shorturl.sohaailkhan.com' },
      ],
    },
    {
      id: 'project-2',
      title: 'Asynchronous Employee Workflow Platform',
      description: 'Architected a Kafka-based producer–consumer workflow processing 50K+ employee events per hour, reducing operational delays by 40%',
      tech: ['Kafka', 'Spring Boot','PostgreSQL','Docker'],
      links: [{ label: 'GitHub', href: 'https://github.com/stack64' }],
    },
  ]

  // Scaffold: replace with your real certifications later
  const certifications = [
    { id: 'cert-1', name: 'IBM Java Developer', issuer: 'Coursera', date: '2026' },
    { id: 'cert-2', name: 'Amazon Junior Software Developer', issuer: 'Coursera', date: '2026' },
  ]

  // Technical skills (with icons for the moving ribbon)
  const skills = [
    { label: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { label: 'Spring Boot', icon: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg' },
    { label: 'Spring MVC', icon: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg' },
    { label: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { label: 'Kafka', icon: 'https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg' },
    { label: 'Hazelcast', icon: 'https://www.vectorlogo.zone/logos/hazelcast/hazelcast-icon.svg' },
    { label: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg' },
    { label: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { label: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { label: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { label: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { label: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { label: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { label: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { label: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { label: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
    { label: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
    { label: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg' },
    { label: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg' },
    { label: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg' },
    { label: 'Elasticsearch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/elasticsearch/elasticsearch-original.svg' },
    { label: 'Kibana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kibana/kibana-original.svg' },
    { label: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { label: 'JUnit', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg' },
    { label: 'Mockito', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mockito/mockito-original.svg' },
    { label: 'Maven', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg' },
    { label: 'Gradle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gradle/gradle-original.svg' },
    { label: 'IntelliJ IDEA', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellijidea/intellijidea-original.svg' },
    { label: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { label: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    { label: 'Swagger', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg' },
    { label: 'REST', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rest/rest-original.svg' },
    { label: 'SOAP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/soap/soap-original.svg' },
    { label: 'XML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xml/xml-original.svg' },
    { label: 'JSON', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg' },
    { label: 'YAML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yaml/yaml-original.svg' },
    { label: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { label: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { label: 'Swagger', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg' },
    { label: 'OpenApi', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
    { label: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
    { label: 'Cursor AI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cursor/cursor-original.svg' },
  ]
  return (
    <div className="page">
      <div className="topBar">
        <button
          type="button"
          className="themeBtn"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>

      <div className="wrap">
        <main className="left">
          <h1 className="name">Sohail Khan</h1>

          <nav className="links" aria-label="Social links">
            <a className="linkText" href="https://github.com/stack64" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <span className="linkSep">/</span>
            <a className="linkText" href="https://www.linkedin.com/in/sohaailkhan/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span className="linkSep">/</span>
            <a className="linkText" href="https://x.com/Sohaailkhann" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </nav>

          <h2 className="sectionTitle">Experiences</h2>
          <section className="experienceList" aria-label="Experience">
            {experiences.map((e) => (
              <button key={e.id} type="button" className="expRow">
                {e.logo ? <img className="expLogo" src={e.logo} alt={`${e.company} logo`} /> : <div className="expDot" aria-hidden="true" />}
                <div className="expMain">
                  <p className="expCompany">{e.company}</p>
                  <p className="expMeta">{e.role}</p>
                  <div className="expDetails">
                    <ul className="expBullets">
                      {e.highlights?.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="expDates">{e.dates}</div>
              </button>
            ))}
          </section>

          <h2 className="sectionTitle sectionTitleSpaced">Technical Skills</h2>
          <section className="skillsSection" aria-label="Technical Skills">
            {/* Screen-reader friendly list (the moving marquee is aria-hidden) */}
            <ul className="srOnly">
              {skills.map((s) => (
                <li key={s.label}>{s.label}</li>
              ))}
            </ul>

            <div className="skillsMarquee" aria-hidden="true">
              <div className="skillsTrack">
                {[...skills, ...skills].map((s, idx) => (
                  <span key={`${s.label}-${idx}`} className="skillPill">
                    <img
                      className="skillIcon"
                      src={s.icon}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                      }}
                    />
                    <span className="skillName">{s.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </section>

          <h2 className="sectionTitle sectionTitleSpaced">Projects</h2>
          <section className="contentSection" aria-label="Projects">
            <div className="cardsGrid">
              {projects.map((p) => (
                <article key={p.id} className="contentCard">
                  <div className="cardTop">
                    <h3 className="cardTitle">{p.title}</h3>
                    <div className="cardLinks">
                      {p.links?.map((l) => (
                        <a key={l.label} className="subtleLink" href={l.href} target="_blank" rel="noreferrer">
                          {l.label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  <p className="cardDesc">{p.description}</p>
                  <div className="tagRow" aria-label="Tech stack">
                    {p.tech?.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <h2 className="sectionTitle sectionTitleSpaced">Certifications</h2>
          <section className="contentSection" aria-label="Certifications">
            <div className="cardsGrid cardsGridTight">
              {certifications.map((c) => (
                <article key={c.id} className="contentCard">
                  <div className="cardTop">
                    <h3 className="cardTitle">{c.name}</h3>
                    <div className="cardMeta">{c.date}</div>
                  </div>
                  <p className="cardDesc">{c.issuer}</p>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>

      <aside className="right" aria-label="Interactive card">
        <div className="cardStage">
          <Canvas
            dpr={[1, 2]}
            gl={{ antialias: true, alpha: true, toneMappingExposure: isDark ? 1 : 1.12 }}
            camera={{ position: [0, 0, 13], fov: 28 }}>
            {/* Make the canvas transparent so the page background shows through */}
            <TransparentCanvas />
            {/* In light mode, slightly reduce ambient so highlights/shadows stay readable */}
            <ambientLight intensity={isDark ? Math.PI : 1.35} />
            <Physics debug={false} interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
              <Band />
            </Physics>
            <Environment blur={0.75}>
              <Lightformer intensity={isDark ? 2 : 1.5} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
              <Lightformer intensity={isDark ? 3 : 2} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
              <Lightformer intensity={isDark ? 3 : 2} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
              <Lightformer intensity={isDark ? 10 : 8} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
            </Environment>
          </Canvas>
        </div>
      </aside>
    </div>
  )
}

function useTheme() {
  const getInitial = () => {
    const stored = window.localStorage.getItem('theme')
    if (stored === 'dark' || stored === 'light') return stored
    return window.matchMedia?.('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light'
  }

  const [theme, setThemeState] = useState(getInitial)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
    const meta = document.querySelector('meta[name="color-scheme"]')
    if (meta) meta.setAttribute('content', theme === 'dark' ? 'dark light' : 'light dark')
  }, [theme])

  return [theme, setThemeState]
}

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-16v2m0 16v2M4 12H2m20 0h-2M5.64 5.64 4.22 4.22m15.56 15.56-1.42-1.42M18.36 5.64l1.42-1.42M4.22 19.78l1.42-1.42"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M21 13.2A8.5 8.5 0 0 1 10.8 3a7.2 7.2 0 1 0 10.2 10.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10 14a5 5 0 0 1 0-7l1.5-1.5a5 5 0 0 1 7 7L17.5 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M14 10a5 5 0 0 1 0 7L12.5 18.5a5 5 0 0 1-7-7L6.5 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function TransparentCanvas() {
  const { gl } = useThree()
  useEffect(() => {
    gl.setClearColor(0x000000, 0)
  }, [gl])
  return null
}

function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef(), fixed = useRef(), j1 = useRef(), j2 = useRef(), j3 = useRef(), card = useRef() // prettier-ignore
  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3() // prettier-ignore
  const segmentProps = { type: 'dynamic', canSleep: true, colliders: false, angularDamping: 2, linearDamping: 2 }
  // const { nodes, materials } = useGLTF('https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb')
  // const texture = useTexture('https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg')

  const { nodes, materials } = useGLTF(CardGLB)
  const texture = useTexture(LanyardPNG)
  const { width, height } = useThree((state) => state.size)
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]))
  const [dragged, drag] = useState(false)
  const [hovered, hover] = useState(false)

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.45, 0]]) // prettier-ignore

  useEffect(() => {
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => void (document.body.style.cursor = 'auto')
    }
  }, [hovered, dragged])

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
      ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z })
    }
    if (fixed.current) {
      // Fix most of the jitter when over pulling the card
      ;[j1, j2].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
        ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)))
      })
      // Calculate catmul curve
      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.lerped)
      curve.points[2].copy(j1.current.lerped)
      curve.points[3].copy(fixed.current.translation())
      band.current.geometry.setPoints(curve.getPoints(32))
      // Tilt it back towards the screen
      ang.copy(card.current.angvel())
      rot.copy(card.current.rotation())
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z })
    }
  })

  curve.curveType = 'chordal'
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping

  return (
    <>
      <group position={[0, 6, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2.25}
            position={[0, -1.2, -0.05]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}
            onPointerUp={(e) => (e.target.releasePointerCapture(e.pointerId), drag(false))}
            onPointerDown={(e) => (e.target.setPointerCapture(e.pointerId), drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation()))))}>
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial map={materials.base.map} map-anisotropy={16} clearcoat={1} clearcoatRoughness={0.15} roughness={0.3} metalness={0.5} />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial color="white" depthTest={false} resolution={[width, height]} useMap map={texture} repeat={[-3, 1]} lineWidth={1} />
      </mesh>
    </>
  )
}