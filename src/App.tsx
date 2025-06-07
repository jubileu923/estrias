import React from 'react';
import { CheckCircle, Shield, Star, Clock, Heart, Sparkles, AlertTriangle, Target, Zap, Eye, Scale, TrendingDown, Leaf, Droplets, Timer, BookOpen, Award } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Urgent Header */}
      <div className="bg-red-600 text-white py-4 px-6 text-center">
        <div className="flex items-center justify-center gap-2 text-sm font-bold animate-pulse">
          <AlertTriangle className="w-5 h-5" />
          ⚠️ Sua Compra Ainda NÃO Foi Finalizada! ⚠️
        </div>
        <p className="text-sm mt-1 font-semibold">
          NÃO FECHE ESTA PÁGINA 
        </p>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-rose-100 via-pink-50 to-purple-100">
        <div className="absolute inset-0 bg-white/30"></div>
        <div className="relative max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
              <CheckCircle className="w-4 h-4" />
              👏 PARABÉNS! VOCÊ DEU UM PASSO IMPORTANTÍSSIMO
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Você acaba de iniciar seu <span className="text-emerald-600">emagrecimento acelerado</span>...
            </h1>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
              <strong>MAS...</strong> deixa eu te contar algo que quase ninguém fala sobre emagrecimento rápido:
            </p>
            
            <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 border-2 border-orange-300 max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-800">O Efeito Colateral que Ninguém Fala</h2>
              </div>
              <p className="text-lg text-gray-700 font-semibold">
                👉 Quando você começa a emagrecer rápido, existe um efeito colateral que assombra milhares de mulheres:
              </p>
              <p className="text-xl text-red-700 font-bold mt-4">
                A pele não acompanha a velocidade da perda de gordura.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Revelation */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 mb-12 border-2 border-red-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            👉 Resultado: estrias visíveis e flacidez acentuada
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 border-l-4 border-red-500 shadow-lg">
                <h3 className="font-bold text-lg text-gray-800 mb-3">Sabe aquela barriga lisinha que você sonha?</h3>
                <p className="text-gray-700">Ela pode ficar com marcas esbranquiçadas ou enrugada.</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border-l-4 border-red-500 shadow-lg">
                <h3 className="font-bold text-lg text-gray-800 mb-3">Sabe aquelas coxas firmes?</h3>
                <p className="text-gray-700">Podem ficar "moles", mesmo com menos gordura.</p>
              </div>
            </div>
            
            <div className="bg-yellow-100 border-2 border-yellow-300 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-6 h-6 text-yellow-600" />
                <span className="font-bold text-yellow-800">POR QUÊ?</span>
              </div>
              <p className="text-yellow-800 font-semibold text-lg">
                Porque a maioria dos protocolos de emagrecimento <strong>NÃO inclui</strong> um método específico para tratar a pele durante o processo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Solution Introduction */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-bold mb-6 shadow-xl">
              <Sparkles className="w-6 h-6" />
              SOLUÇÃO EXCLUSIVA
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              ✨ MÉTODO DERMORESET™
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              As receitas caseiras mais poderosas para combater estrias e flacidez durante e após o emagrecimento
            </p>
            
            <div className="bg-white rounded-3xl p-8 mt-8 shadow-xl border border-emerald-200 max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-4">
                Após anos de pesquisa com dermatologistas e especialistas em estética natural, reunimos os rituais mais secretos e eficazes em um manual prático que você pode aplicar em casa — com ingredientes simples, mas altamente potentes.
              </p>
              <div className="bg-emerald-100 rounded-2xl p-6 border-2 border-emerald-300">
                <p className="text-emerald-800 font-bold text-xl">
                  👉 "O milagre que minha pele precisava enquanto eu emagrecia."
                </p>
                <p className="text-emerald-700 text-sm mt-2">— Depoimento de uma aluna</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Method Benefits */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          🚀 O que você vai descobrir no MÉTODO DERMORESET™:
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-emerald-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-emerald-100 rounded-full flex-shrink-0">
                <Leaf className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">3 Receitas Caseiras Poderosas</h3>
                <p className="text-gray-700">Para estimular a produção de colágeno na pele flácida — com resultados visíveis em 14 dias.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-purple-100 rounded-full flex-shrink-0">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Mistura Anti-Estrias Ancestral</h3>
                <p className="text-gray-700">Usada por celebridades fitness — que clareia e suaviza estrias antigas e impede novas.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-blue-100 rounded-full flex-shrink-0">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Elixir Natural de Firmeza</h3>
                <p className="text-gray-700">Que reativa a firmeza da pele após emagrecimento acelerado — preparo em menos de 3 minutos.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-indigo-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-indigo-100 rounded-full flex-shrink-0">
                <Clock className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Ritual Noturno de Regeneração</h3>
                <p className="text-gray-700">Que age enquanto você dorme, potencializando a elasticidade e o viço natural da pele.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-pink-100 rounded-full flex-shrink-0">
                <Zap className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Potencializador Natural</h3>
                <p className="text-gray-700">Como potencializar qualquer creme ou óleo corporal com ingredientes que triplicam sua eficácia.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-teal-100">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-teal-100 rounded-full flex-shrink-0">
                <BookOpen className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">Protocolo DERMORESET™ Completo</h3>
                <p className="text-gray-700">Para acompanhar seu emagrecimento passo a passo — em cada fase da perda de peso.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Risk Warning */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-8 md:p-12 mb-12 border-2 border-red-200">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            💥 Em outras palavras:
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-emerald-600 font-bold text-2xl">👉</div>
              <p className="text-lg text-gray-800 font-semibold">Você já deu um passo incrível com nosso Protocolo de Emagrecimento.</p>
            </div>
            
            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-red-600 font-bold text-2xl">👉</div>
              <p className="text-lg text-gray-800 font-semibold">Mas sem aplicar o DERMORESET™, você corre um risco real:</p>
            </div>
            
            <div className="bg-red-100 border-2 border-red-300 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <span className="font-bold text-red-800">RISCO REAL</span>
              </div>
              <p className="text-red-800 font-bold text-lg">
                → EMAGRECER e mesmo assim não se sentir feliz ao se olhar no espelho, porque sua pele não acompanhou a transformação.
              </p>
              <p className="text-red-700 font-semibold mt-3">
                👉 E o pior: você só percebe isso tarde demais — quando as marcas já estão instaladas e a flacidez já avançou.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Testimonials */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          💬 Veja o que nossas alunas dizem:
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Resultados reais de mulheres que usaram o MÉTODO DERMORESET™
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                CM
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Carla M.</h3>
                <p className="text-gray-600">34 anos</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed font-medium">
              "Comecei a usar as receitas do DERMORESET™ já na segunda semana de emagrecimento. Hoje, 8kg a menos e minha pele está até MELHOR que antes!"
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                TR
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Tatiane R.</h3>
                <p className="text-gray-600">29 anos</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed font-medium">
              "Eu não acreditava em receitas naturais. Mas as combinações que vocês ensinaram fizeram milagres. Minhas estrias nas coxas quase sumiram e minha barriga ficou muito firme."
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                PF
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Patrícia F.</h3>
                <p className="text-gray-600">42 anos</p>
              </div>
            </div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed font-medium">
              "Já tinha perdido peso outras vezes e ficava com muita flacidez. Desta vez usei o DERMORESET™ e foi outro nível de resultado. Pele firme e bonita!"
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Offer Section */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-bold mb-6">
            <AlertTriangle className="w-4 h-4" />
            🚨 OFERTA EXCLUSIVA — SOMENTE AGORA
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            MÉTODO DERMORESET™ Completo
          </h2>
          
          <div className="bg-white/15 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <p className="text-lg opacity-75 line-through mb-2">De R$197,00</p>
                <p className="text-6xl font-bold mb-2">R$39,00</p>
                <p className="text-lg opacity-90">👉 Pagamento único</p>
              </div>
              <div className="text-left space-y-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-green-300" />
                  <span className="text-lg">Manual Digital Completo (entregue por e-mail)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Timer className="w-6 h-6 text-green-300" />
                  <span className="text-lg">Acesso vitalício</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-300" />
                  <span className="text-lg">Garantia total de 7 dias</span>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xl opacity-95 mb-8 font-semibold">
            👉 Oferta disponível somente nesta página. Ao fechar, não poderá mais ser acessada.
          </p>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <a 
  href="https://pay.kirvano.com/c3bcaa51-9427-45ee-90ca-f908674dbb4f" 
  target="_blank" 
  rel="noopener noreferrer"
  className="group bg-gradient-to-r from-emerald-500 via-teal-600 to-blue-600 hover:from-emerald-600 hover:via-teal-700 hover:to-blue-700 text-white font-bold text-xl px-12 py-8 rounded-3xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 mb-8 animate-pulse hover:animate-none w-full max-w-4xl block text-center"
>
  <span className="flex items-center justify-center gap-3 flex-wrap">
    ✅ QUERO AS RECEITAS SECRETAS DO MÉTODO DERMORESET™ POR APENAS R$47,00!
    <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
  </span>
</a>
        
        <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-center gap-2 text-red-700 font-bold text-lg">
            <AlertTriangle className="w-6 h-6" />
            IMPORTANTE
          </div>
          <p className="text-red-700 font-semibold mt-2">
            Esta oferta NÃO estará disponível novamente. Se você sair desta página, ela desaparecerá.
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-2 text-gray-600">
          <Shield className="w-5 h-5 text-green-600" />
          <span className="text-sm">Compra 100% segura. Manual digital, não altera sua compra anterior.</span>
        </div>
      </div>
    </div>
  );
}

export default App;