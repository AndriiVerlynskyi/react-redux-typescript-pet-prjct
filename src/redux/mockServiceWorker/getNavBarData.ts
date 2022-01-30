import { setupWorker, rest } from 'msw';
import { navBarUrl } from '../../router/routes';

const worker = setupWorker(
    rest.get('/navBar', ( req, res, ctx ) => {
        return res(
            ctx.json({
                customerTier: '',
                navItemsList: [{
                    navTitle: '',
                    listElements: [{
                        title: '',
                        icon: '',
                        isNew: false
                    }]
                }]
            })
        )
    })
)

console.log('This code is going to work')

worker.start()