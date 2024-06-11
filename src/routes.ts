export const Routes = [
  {
    path: 'admin',
    //module: AdminModule,
    children: [
      {
        path: 'dashboard',
        //module: DashboardModule,
      },
      {
        path: 'metrics',
        //module: MetricsModule,
      },
    ],
  },
];

export default Routes;
