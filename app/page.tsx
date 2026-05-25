"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Atom,
  FunctionSquare,
  Code2,
  GraduationCap,
  MessageCircle,
  CheckCircle2,
  Mail,
  Radio,
  Sigma,
  Waves,
  Binary,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function PersonalTutoringServicePage() {
  const services = [
    {
      icon: <Calculator className="w-7 h-7" />,
      tag: "Foundation",
      title: "微積分 / 物理解題教學",
      desc: "Calculus, Physics, Electromagnetics",
    },
    {
      icon: <FunctionSquare className="w-7 h-7" />,
      tag: "Engineering Math",
      title: "工程數學：微分方程",
      desc: "ODE, Laplace Transform, Series Solution",
    },
    {
      icon: <Atom className="w-7 h-7" />,
      tag: "Linear Algebra",
      title: "線性代數",
      desc: "Matrix, Eigenvalues, Vector Space",
    },
    {
      icon: <Waves className="w-7 h-7" />,
      tag: "Signals",
      title: "訊號與系統",
      desc: "Fourier Transform, LTI Systems",
    },
    {
      icon: <Sigma className="w-7 h-7" />,
      tag: "Probability",
      title: "工程機率",
      desc: "Random Variables, PDF, Expectation",
    },
    {
      icon: <Radio className="w-7 h-7" />,
      tag: "Analog Comm",
      title: "類比通訊",
      desc: "AM, FM, PM, Noise Analysis",
    },
    {
      icon: <Binary className="w-7 h-7" />,
      tag: "Digital Comm",
      title: "數位通訊",
      desc: "BPSK, QPSK, BER, AWGN",
    },
    {
      icon: <Code2 className="w-7 h-7" />,
      tag: "Programming",
      title: "Python / 程式設計",
      desc: "Python, LeetCode, Simulation",
    },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#e0f2fe,transparent_28%),radial-gradient(circle_at_top_right,#ede9fe,transparent_30%),#f8fafc] text-slate-900 overflow-hidden">

      <section className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-10 items-center"
        >

          <div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-sm text-slate-600 mb-6">
              <GraduationCap className="w-4 h-4" />
              EE / CCE Background
            </div>

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Engineering & Math
              <span className="block text-blue-700">
                Tutoring Service
              </span>
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Specialized in Signals & Systems, Communications,
              Engineering Mathematics, Probability, and Programming.
              Please feel free to contact me for personalized tutoring sessions
            </p>

            <div className="flex gap-4">

              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=yoyoman12379@gmail.com">

                <button className="inline-flex items-center rounded-2xl px-6 py-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors">

                  <MessageCircle className="w-5 h-5 mr-2" />

                  預約諮詢

                </button>

              </a>

              <a href="#services">

                <button className="inline-flex items-center rounded-2xl px-6 py-4 border border-slate-300 bg-white hover:bg-slate-100 transition-colors">

                  查看服務

                  <ArrowRight className="w-5 h-5 ml-2" />

                </button>

              </a>

            </div>

          </div>

          <div className="rounded-[2rem] shadow-2xl border border-white bg-white/80 backdrop-blur p-8">

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs mb-6">

              <Sparkles className="w-3.5 h-3.5" />

              Personal Website

            </div>

            <h2 className="text-3xl font-bold mb-3">
              Alex Huang
            </h2>

            <p className="text-slate-600 leading-relaxed mb-8">
              Graduated from NSYSU, EE
              <br />
              Studying in NCKU, CCE
            </p>

            <div className="space-y-3">

              {[
                "Signals & Systems",
                "Communications",
                "Engineering Mathematics",
                "Programming",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2 className="w-5 h-5 text-blue-700" />

                  <span>{item}</span>

                </div>

              ))}

            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yoyoman12379@gmail.com"
              className="mt-8 inline-flex items-center gap-3 text-slate-700 hover:text-black"
            >

              <div className="w-11 h-11 rounded-2xl bg-slate-100 flex items-center justify-center">

                <Mail className="w-5 h-5" />

              </div>

              Contact / Request Service

            </a>

          </div>

        </motion.div>

      </section>

      <section
        id="services"
        className="max-w-6xl mx-auto px-6 pb-20"
      >

        <div className="mb-10">

          <h2 className="text-4xl font-bold mb-3">
            Services
          </h2>

          <p className="text-slate-600">
            Engineering, Mathematics, Communications, Programming
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {services.map((service, index) => (

            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
            >

              <div className="rounded-3xl bg-white shadow-lg p-6 hover:-translate-y-1 hover:shadow-xl transition-all h-full">

                <div className="flex items-center justify-between mb-5">

                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center">

                    {service.icon}

                  </div>

                  <span className="text-[11px] px-2 py-1 rounded-full bg-slate-900 text-white">

                    {service.tag}

                  </span>

                </div>

                <h3 className="text-lg font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-600">
                  {service.desc}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

    </div>
  );
}