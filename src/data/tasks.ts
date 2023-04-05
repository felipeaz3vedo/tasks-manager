type Tasks = {
  id: string;
  protocol: string;
  client: string;
  priority: 'low' | 'medium' | 'hard';
  type: 'bug' | 'epic' | 'sprint' | 'task';
  status: string;
  users: string[] | [];
};

export const tasks: Tasks[] = [
  {
    id: crypto.randomUUID(),
    protocol: '202303210029',
    client: 'Infomix',
    type: 'epic',
    priority: 'medium',
    status: 'completed',
    users: ['Felipe de Azevedo Pessoa', 'Ediclécio Micael']
  },
  {
    id: crypto.randomUUID(),
    protocol: '2023032130022',
    client: 'PystonNet',
    type: 'sprint',
    priority: 'hard',
    status: 'not started',
    users: []
  },
  {
    id: crypto.randomUUID(),
    protocol: '202303210050',
    client: 'Alfa Network',
    type: 'task',
    priority: 'low',
    status: 'processing',
    users: ['John Lennon', 'Luiz Henrique', 'Wellington']
  },
  {
    id: crypto.randomUUID(),
    protocol: '202303215002',
    client: 'Zup Net',
    type: 'task',
    priority: 'hard',
    status: 'completed',
    users: ['Pinho']
  },
  {
    id: crypto.randomUUID(),
    protocol: '202303210002',
    client: 'Pyston Net',
    type: 'bug',
    priority: 'medium',
    status: 'next up',
    users: ['Felipe de Azevedo Pessoa']
  },
  {
    id: crypto.randomUUID(),
    protocol: '202303213202',
    client: 'Ultra Net',
    type: 'bug',
    priority: 'medium',
    status: 'ice box',
    users: ['Major', 'Weslley']
  },
  {
    id: crypto.randomUUID(),
    protocol: '202303212121',
    client: 'Infomix',
    type: 'bug',
    priority: 'low',
    status: 'not started',
    users: []
  },
  {
    id: crypto.randomUUID(),
    protocol: '202303210010',
    client: 'Infomix',
    type: 'bug',
    priority: 'hard',
    status: 'processing',
    users: ['Major', 'Weslley']
  },
  {
    id: crypto.randomUUID(),
    protocol: '202303210102',
    client: 'Infomix',
    type: 'bug',
    priority: 'medium',
    status: 'processing',
    users: ['Major']
  },
  {
    id: crypto.randomUUID(),
    protocol: '202303210005',
    client: 'Infomix',
    type: 'bug',
    priority: 'medium',
    status: 'processing',
    users: ['Edclécio Micael']
  }
];
