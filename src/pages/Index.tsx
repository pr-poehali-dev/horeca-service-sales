import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Moon, Sun } from 'lucide-react';

const Index = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeService, setActiveService] = useState('sales');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">H</span>
            </div>
            <span className="font-bold text-xl">HoReCa EXPERT</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('services')} className="hover:text-primary transition-colors">Услуги</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-primary transition-colors">Процесс</button>
            <button onClick={() => scrollToSection('cases')} className="hover:text-primary transition-colors">Кейсы</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-primary transition-colors">Цены</button>
            <button onClick={() => scrollToSection('reviews')} className="hover:text-primary transition-colors">Отзывы</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-primary transition-colors">Контакты</button>
          </div>

          <button 
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
        </nav>
      </header>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://cdn.poehali.dev/projects/6b9136b7-7746-4ed2-885d-dd154a232dd3/files/7e8e2ad7-b1dc-4994-a6a2-955491896118.jpg" 
            alt="Restaurant interior" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-background/90"></div>
        </div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
              Эксперт — продажи & сервис
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Хватит терять деньги на <span className="text-primary">плохом сервисе</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Выстраиваю систему продаж и культуры в ресторанах, клубах, отелях.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button onClick={() => scrollToSection('process')} size="lg" className="text-lg px-8 py-6">
                С чего начать?
              </Button>
              <Button onClick={() => scrollToSection('contact')} size="lg" variant="outline" className="text-lg px-8 py-6">
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50 relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-64 opacity-30 hidden lg:block">
          <img 
            src="https://cdn.poehali.dev/projects/6b9136b7-7746-4ed2-885d-dd154a232dd3/files/622bb9b0-d699-481b-9564-d62ca583afb3.jpg" 
            alt="Training" 
            className="w-full h-full object-cover rounded-l-3xl"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover-lift border-l-4 border-l-primary">
              <h3 className="text-xl font-bold mb-4">Продажи — это система</h3>
              <p className="text-muted-foreground">Не скрипт и не улыбка по инструкции.</p>
            </Card>
            <Card className="p-8 hover-lift border-l-4 border-l-primary">
              <h3 className="text-xl font-bold mb-4">Сервис — это внимание</h3>
              <p className="text-muted-foreground">Не стандарты на бумаге, а поведение в зале.</p>
            </Card>
            <Card className="p-8 hover-lift border-l-4 border-l-primary">
              <h3 className="text-xl font-bold mb-4">Результат — в ежедневных действиях</h3>
              <p className="text-muted-foreground">Команда, которая продаёт и удерживает.</p>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 relative">
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <img 
            src="https://cdn.poehali.dev/projects/6b9136b7-7746-4ed2-885d-dd154a232dd3/files/fe5725c7-f8cc-4fca-a726-3cb955a0df39.jpg" 
            alt="Service" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Услуги</h2>
            
            <Tabs defaultValue="sales" className="w-full" onValueChange={setActiveService}>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="sales" className="text-lg">ПРОДАЖИ</TabsTrigger>
                <TabsTrigger value="service" className="text-lg">СЕРВИС</TabsTrigger>
              </TabsList>

              <TabsContent value="sales" className="space-y-6">
                <ServiceCard
                  icon="TrendingUp"
                  title="Консультация «Продажи, которые работают»"
                  description="Диагностика, разбор слабых мест, пошаговый план."
                  details="Формат: онлайн/офлайн, 90 минут. От 15 000 ₽."
                />
                <ServiceCard
                  icon="Search"
                  title="Аудит продаж"
                  description="Проверка всей воронки в зале: встреча → рекомендации → апсейл → чек."
                  details="Тайный гость / по видео / очно. 3–5 дней. От 30 000 ₽."
                />
                <ServiceCard
                  icon="Users"
                  title="Внедрение «Продажи изнутри»"
                  description="Я или мой специалист встраиваемся в команду (тайно или открыто) и перестраиваем систему в реальных сменах."
                  details="Форматы: тайное внедрение / открытое / «наставник на неделю». 2–14 дней. От 50 000 ₽."
                />
                <ServiceCard
                  icon="GraduationCap"
                  title="Обучение и тренинги по продажам"
                  description="Мини-тренинг (1,5–2 ч), День практики (4–6 ч), Серия (3–5 встреч)."
                  details="От 25 000 ₽."
                />
              </TabsContent>

              <TabsContent value="service" className="space-y-6">
                <ServiceCard
                  icon="Heart"
                  title="Консультация «Сервис, который удерживает»"
                  description="Разбор формата, команды, атмосферы."
                  details="Онлайн/офлайн, 90 минут. От 15 000 ₽."
                />
                <ServiceCard
                  icon="Eye"
                  title="Аудит сервиса и атмосферы"
                  description="Речь, жесты, внимание, скорость, эмоциональный фон."
                  details="Тайный гость / наблюдение в смене / по видео. 3–5 дней. От 30 000 ₽."
                />
                <ServiceCard
                  icon="Sparkles"
                  title="Внедрение «Культура сервиса изнутри»"
                  description="Наставник в смене: стандарты, обратная связь, поведение и атмосфера — не на бумаге, а в действии."
                  details="2–14 дней. От 50 000 ₽."
                />
                <ServiceCard
                  icon="Award"
                  title="Обучение и тренинги по сервису"
                  description="Мини-формат (1,5–2 ч), День практики, Серия обучения."
                  details="От 25 000 ₽."
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="process" className="py-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <img 
            src="https://cdn.poehali.dev/projects/6b9136b7-7746-4ed2-885d-dd154a232dd3/files/3cdf6b63-7aa8-4b7f-b2ec-0b07b0d49528.jpg" 
            alt="Process" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">С чего начать</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ProcessStep number="01" title="Заявка" description="Короткий бриф" />
              <ProcessStep number="02" title="Консультация 90 мин" description="Диагностика и план" />
              <ProcessStep number="03" title="Выбор формата" description="Аудит / внедрение / обучение" />
              <ProcessStep number="04" title="Старт работ" description="Быстрые победы за 1–2 недели" />
            </div>

            <div className="text-center mt-12">
              <Button onClick={() => scrollToSection('contact')} size="lg" className="px-8">
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 relative">
        <div className="absolute inset-0 opacity-5 dark:opacity-5">
          <img 
            src="https://cdn.poehali.dev/projects/6b9136b7-7746-4ed2-885d-dd154a232dd3/files/cd28870a-6575-4020-92eb-2a64c2c23a26.jpg" 
            alt="Happy guests" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Кейсы и результаты</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CaseCard 
                title="Частный клуб" 
                service="Внедрение продаж"
                results={['Средний чек +35%', 'Конверсия +42%', 'NPS 8.5 → 9.2']}
              />
              <CaseCard 
                title="Ресторан премиум" 
                service="Аудит сервиса"
                results={['Повторные визиты +28%', 'Отзывы 4.2 → 4.8', 'Текучка -40%']}
              />
              <CaseCard 
                title="Городской отель" 
                service="Обучение команды"
                results={['Доп. продажи +50%', 'Booking 8.3 → 9.1', 'Упоминания +60%']}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-muted/50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 w-1/2 h-full opacity-15 dark:opacity-10">
            <img 
              src="https://cdn.poehali.dev/projects/6b9136b7-7746-4ed2-885d-dd154a232dd3/files/a46c11c1-50e6-40d4-a92d-506e08a8f81f.jpg" 
              alt="Hotel" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-15 dark:opacity-10">
            <img 
              src="https://cdn.poehali.dev/projects/6b9136b7-7746-4ed2-885d-dd154a232dd3/files/57947c64-7523-420f-8fc1-454d07e3c4d7.jpg" 
              alt="Bar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Пакеты и стоимость</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard 
                title="Старт" 
                price="от 15 000 ₽"
                description="Консультация 90 мин"
                features={['Диагностика проблем', 'Пошаговый план', 'Онлайн/офлайн']}
              />
              <PricingCard 
                title="Стандарт" 
                price="от 30 000 ₽"
                description="Аудит 3–5 дней"
                features={['Тайный гость', 'Детальный отчёт', 'Рекомендации']}
                highlighted
              />
              <PricingCard 
                title="Про" 
                price="от 50 000 ₽"
                description="Внедрение 2–14 дней"
                features={['Работа в командах', 'Системные изменения', 'Быстрые результаты']}
              />
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Финальная стоимость зависит от формата, состава команды и количества смен.
            </p>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <img 
            src="https://cdn.poehali.dev/projects/6b9136b7-7746-4ed2-885d-dd154a232dd3/files/bfa23546-96c3-4c31-953d-877941f9c363.jpg" 
            alt="Team success" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Отзывы</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <ReviewCard 
                name="Анна Кравцова"
                position="Управляющая ресторана"
                text="Команда начала продавать без давления. Средний чек вырос на 35% за месяц."
                verified
              />
              <ReviewCard 
                name="Дмитрий Соколов"
                position="Владелец клуба"
                text="Быстрые изменения в первую же смену. Гости стали возвращаться."
                verified
              />
              <ReviewCard 
                name="Елена Михайлова"
                position="Директор отеля"
                text="Команда зажигается изнутри. Не просто стандарты — живой сервис."
                verified
              />
              <ReviewCard 
                name="Игорь Белов"
                position="Шеф-менеджер"
                text="Конкретные инструменты, а не общие слова. Результат виден сразу."
                verified
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">FAQ</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-lg font-semibold">
                  Чем консультация отличается от аудита?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Консультация — это разбор ситуации и стратегия на 90 минут. Аудит — погружение в процессы на 3-5 дней с детальным отчётом.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-lg font-semibold">
                  Что даёт внедрение по сравнению с тренингом?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Тренинг — это теория и практика в зале. Внедрение — работа прямо в сменах с вашей командой, изменения в реальном времени.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-lg font-semibold">
                  Тайно или открыто — как выбрать формат?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Тайное внедрение показывает реальную картину без прикрас. Открытое — помогает быстрее внедрить изменения с поддержкой команды.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-lg font-semibold">
                  Как быстро виден эффект?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Первые результаты — за 1-2 недели. Устойчивые изменения закрепляются через месяц работы.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-lg font-semibold">
                  Можно ли начать онлайн?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, консультация и диагностика доступны онлайн. Для внедрения и аудита нужна работа на месте.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-lg font-semibold">
                  Работа с регионами?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да, работаю по всей России. Стоимость включает проезд и проживание при необходимости.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-background rounded-lg px-6 border">
                <AccordionTrigger className="text-lg font-semibold">
                  Условия и оплата?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Предоплата 50% при бронировании дат, оставшиеся 50% — после завершения работ. Работаю по договору.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 dark:opacity-5">
          <img 
            src="https://cdn.poehali.dev/projects/6b9136b7-7746-4ed2-885d-dd154a232dd3/files/1af0547c-0c42-4e9b-b71f-63037ad0e193.jpg" 
            alt="Premium service" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Оставить заявку</h2>
            <p className="text-center text-muted-foreground mb-12">
              Отвечаю в течение рабочего дня. Конфиденциально.
            </p>
            
            <Card className="p-8">
              <form className="space-y-6">
                <div>
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="phone">Телефон / WhatsApp</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="city">Город</Label>
                  <Input id="city" placeholder="Ваш город" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="format">Формат</Label>
                  <select id="format" className="w-full mt-2 px-3 py-2 border border-input rounded-md bg-background">
                    <option>Консультация</option>
                    <option>Аудит</option>
                    <option>Внедрение</option>
                    <option>Обучение</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="comment">Комментарий</Label>
                  <Textarea id="comment" placeholder="Расскажите о вашей ситуации" className="mt-2" rows={4} />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button variant="outline" size="lg" className="gap-2">
                    <Icon name="MessageCircle" size={20} />
                    WhatsApp
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2">
                    <Icon name="Send" size={20} />
                    Telegram
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2">
                    <Icon name="Phone" size={20} />
                    Позвонить
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xl">H</span>
                  </div>
                  <span className="font-bold text-xl">HoReCa EXPERT</span>
                </div>
                <p className="text-sm text-muted-foreground">Продажи и сервис — одна система.</p>
              </div>

              <div className="flex gap-4">
                <Button variant="ghost" size="icon">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
              © 2024 HoReCa Expert. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const ServiceCard = ({ icon, title, description, details }: { icon: string; title: string; description: string; details: string }) => (
  <Card className="p-6 hover-lift">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon name={icon} className="text-primary" size={24} />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-3">{description}</p>
        <p className="text-sm text-primary font-semibold">{details}</p>
      </div>
    </div>
  </Card>
);

const ProcessStep = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="relative">
    <div className="text-6xl font-bold text-primary/20 mb-4">{number}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const CaseCard = ({ title, service, results }: { title: string; service: string; results: string[] }) => (
  <Card className="p-6 hover-lift">
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <p className="text-sm text-primary mb-4">{service}</p>
    <div className="space-y-2">
      {results.map((result, idx) => (
        <div key={idx} className="flex items-center gap-2 text-sm">
          <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={16} />
          <span>{result}</span>
        </div>
      ))}
    </div>
  </Card>
);

const PricingCard = ({ title, price, description, features, highlighted }: { title: string; price: string; description: string; features: string[]; highlighted?: boolean }) => (
  <Card className={`p-8 hover-lift ${highlighted ? 'border-primary border-2 shadow-lg' : ''}`}>
    <h3 className="text-2xl font-bold mb-2">{title}</h3>
    <div className="text-3xl font-bold text-primary mb-2">{price}</div>
    <p className="text-muted-foreground mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, idx) => (
        <li key={idx} className="flex items-start gap-2 text-sm">
          <Icon name="Check" className="text-primary flex-shrink-0 mt-0.5" size={16} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </Card>
);

const ReviewCard = ({ name, position, text, verified }: { name: string; position: string; text: string; verified?: boolean }) => (
  <Card className="p-6">
    <div className="flex items-start gap-3 mb-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon name="User" className="text-primary" size={24} />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h4 className="font-bold">{name}</h4>
          {verified && <Icon name="BadgeCheck" className="text-primary" size={16} />}
        </div>
        <p className="text-sm text-muted-foreground">{position}</p>
      </div>
    </div>
    <p className="text-muted-foreground">{text}</p>
  </Card>
);

export default Index;